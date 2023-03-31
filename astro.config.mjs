import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import deno from "@astrojs/deno";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    site: "https://campsite.chat",
    integrations: [tailwind(), mdx(), prefetch(), sitemap({ i18n: { defaultLocale: "en-GB" }}), solidJs()],
    output: "server",
    adapter: deno()
});