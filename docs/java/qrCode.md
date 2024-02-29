---
lang: zh-CN
title: java二维码
description: 页面的描述
---

#### java 示例

```java
import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import java.io.ByteArrayOutputStream;
import java.util.Base64;
import java.util.Hashtable;

/**
 * 二维码相关工具类
 */
public class QRCodeUtils {

    /**
     * 字符串转二维码图片base64
     * @param qrCodestr
     * @return
     * @throws Exception
     */
    public static String genQRCodeBase64 (String qrCodestr) throws Exception {
        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        Hashtable<EncodeHintType, String> hints = new Hashtable<>();
        hints.put(EncodeHintType.MARGIN, "0");
        // 设置二维码图片宽高
        BitMatrix bitMatrix = qrCodeWriter.encode(qrCodestr, BarcodeFormat.QR_CODE,600, 600, hints);
        // 写到输出流
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(bitMatrix, "PNG", outputStream);
        // 转换为base64
        Base64.Encoder encoder = Base64.getEncoder();
        String qrCodeBase64 = "data:image/png;base64," + encoder.encodeToString(outputStream.toByteArray());
        // 打印base64结果
        System.out.println("二维码图片:" + qrCodeBase64);
        return qrCodeBase64;
    }
}

```

#### maven 依赖

```xml
         <!--二维码-->
        <dependency>
            <groupId>com.google.zxing</groupId>
            <artifactId>core</artifactId>
            <version>3.3.0</version>
        </dependency>

        <dependency>
            <groupId>com.google.zxing</groupId>
            <artifactId>javase</artifactId>
            <version>3.3.0</version>
        </dependency>

```
