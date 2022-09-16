/**根据docs下面的文件目录自动生成siderBar */
const fs = require("fs")
const path = require("path")

const excludeFile = [".vuepress", "assets", "README.md"]

type FileTreeItem = {
  text: string
  collapsible: boolean
  children?: (FileTreeItem | string)[]
}

/**用来判断是文件还是文件夹 */
const useIsFile = async (filePath: string) => {
  const stat = await fs.promises.stat(filePath)
  return stat.isFile()
}

/**构建文件目录数组 */
const useGetFileTree = async (filePath: string, _filePathAbsolute: string) => {
  const fileTree: (FileTreeItem | string)[] = []
  const filenameArr = await fs.promises.readdir(_filePathAbsolute)

  for (let fileName of filenameArr) {
    const filePathAbsolute = path.resolve(_filePathAbsolute, fileName)
    const filePathRes = `${filePath}/${fileName}`
    const isFile = await useIsFile(filePathAbsolute)
    const file: FileTreeItem = {
      text: fileName,
      collapsible: true,
      children: [],
    }
    /**判断是文件夹则递归获取文件树，文件则直接推入文件路径 */
    if (excludeFile.includes(fileName)) {
    } else if (!isFile) {
      file.children = await useGetFileTree(filePathRes, filePathAbsolute)
      fileTree.push(file)
    } else {
      fileTree.push(filePathRes)
    }
  }
  return fileTree
}

const writeSideBar = async () => {
  const sideBar = await useGetFileTree("", "./docs")
  const currentPath = path.resolve(__dirname, "./sideBar.ts")
  fs.writeFile(currentPath, JSON.stringify(sideBar), () => {})
}

writeSideBar()
