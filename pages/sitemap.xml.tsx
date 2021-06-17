import { GetServerSideProps } from 'next';
import fs from 'fs';
// import path from 'path';

// export default function Sitemap() {}

// type Url = {
//   host: string;
//   route: string;
//   date?: Date;
// };

// const baseUrl = {
//   development: "http://localhost:3000",
//   production: "https://www.off-let.com",
// }[process.env.NODE_ENV];

// const ReadManifestFile = (): object => {
//   const routes_manifest_path = path.join(baseUrl + '/.next/server/pages-manifest.json');

//   // Read from the file
//   if (fs.existsSync(routes_manifest_path)) {
//     const raw_json = fs.readFileSync(routes_manifest_path);
//     return JSON.parse(raw_json.toString());
//   } else return null;
// };

// const isNextInternalUrl = (path: string): boolean => {
//   return new RegExp(/[^\/]*^.[_]|(?:\[)/g).test(path);
// }

// const GetPathsFromBuildFolder = (dir: string, urlList: Array<Url>, host: string,): Array<Url> => {
//   const files: string[] = fs.readdirSync(dir);
//   urlList = urlList || [];

//   files.forEach((file) => {
//     if (fs.statSync(dir + file).isDirectory()) {
//       urlList = GetPathsFromBuildFolder(dir + file + '/', urlList, host);
//     } else {
//       if (path.extname(file) == '.json') {
//         let route = path.join(dir + file.substring(0, file.length - 5));
//         route = route.replace(baseUrl, '/');
//         urlList.push({ host: host, route: route });
//       }
//     }
//   });

//   return urlList;
// };

// const GetUrlElement = ({ host, route, date }: Url): string => {
//   if (date) {
//     return `<url><loc>${host}${route}</loc><lastmod>${date}</lastmod></url>`;
//   } else return `<url><loc>${host}${route}</loc></url>`;
// };

// const GetSitemapXml = (urls: Array<Url>): string => `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     ${urls.map((url) => GetUrlElement(url)).join('')}
//     </urlset>`;

// const GetPathsFromManifest = (manifest: any, host: string): Array<Url> => {
//   let routes: Array<string> = [];

//   for (let [route, file] of Object.entries(manifest)) {
//     if (!isNextInternalUrl(route)) {
//       // Add static paths
//       routes = routes.concat(route);
//     }
//   }

//   let sitemapUrls: Array<Url> = [];
//   routes.forEach((route) => {
//     sitemapUrls.push({ host: host, route: route });
//   });

//   return sitemapUrls;
// };

// const excludedRoutes: Array<string> = ['/sitemap', '/404'];

// export const getSesrverSideProps: GetServerSideProps = async ({ res }) => {
//   const basePath: string = process.cwd();
//   const routes_manifest: object = ReadManifestFile();
//   const host: string = "https://example.com"

//   let routes: Array<Url> = GetPathsFromManifest(routes_manifest, host);
//   const pagesPath = path.join(basePath + '/.next/server/pages/');
//   routes = routes.concat(GetPathsFromBuildFolder(pagesPath, [], host));

//   routes = routes.filter((el) => !excludedRoutes.includes(el.route));
//   const sitemap: string = GetSitemapXml(routes);

//   res.setHeader('Content-Type', 'text/xml');
//   res.write(sitemap);
//   res.end();
//   return { props: {} };
// };

const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {

  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://www.off-let.com",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.tsx",
        "_document.tsx",
        "_error.tsx",
        "sitemap.xml.ts",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
