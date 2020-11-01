/** @format */
import S3 from "aws-sdk/clients/s3";

export default async (req, res) => {
  const s3Instance = new S3({
    endpoint: process.env.S3_ENDPOINT || "s3.eu-west-1.prod.koyeb.com",
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
    region: process.env.S3_REGION || "eu-west-1",
    signatureVersion: "v4",
  });

  const objStream = s3Instance
    .getObject({
      Bucket: process.env.S3_BUCKET,
      Key: req?.query?.key,
    })
    .createReadStream();

  objStream.on("error", (error) => {
    res.statusCode = 404;
    res.end();
  });

  objStream.pipe(res);
};
