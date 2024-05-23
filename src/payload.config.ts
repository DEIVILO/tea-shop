import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import path from "path";

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections: [],
    routes: {
        admin: "/nezini"
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "- Lorem Ipsum teashop",
            favicon: "/favicon.ico",
            ogImage: "/thumbnail.jpg"
        },
    },
    rateLimit: {
        max: 2000,                          //TODO: REMOVE FOR PRODUCTION OR REDUCE TO 500 (WHAT PAYLOAD AUTOS IT TO)
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGODB_URL!,
    }),
    typescript: {
        outputFile: path.resolve(__dirname, "payload-types.ts"),
    }
})