This project illustrates how to implement S3 in Next.js using [Uppy](https://uppy.io/) React upload component.

## Getting Started

Create a file name `env.local` in the root directory of this repository and paste the following variables and replace `<YOUR_VALUE>` with your S3 configuration.

```
S3_ENDPOINT=<YOUR_VALUE>
S3_ACCESS_KEY=<YOUR_VALUE>
S3_SECRET_KEY=<YOUR_VALUE>
S3_REGION=<YOUR_VALUE>
S3_BUCKET=<YOUR_VALUE>
```

Run the project

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000), click the **Upload** button and upload a few files.

Once your files uploaded, you can fetch them via `http://localhost:3000/objects/<object-name>`
