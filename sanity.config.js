// sanity.config.js
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import { visionTool } from '@sanity/vision';

export default defineConfig({
  title: "Powder Ridge",
  projectId: "1oaoktsj",
  dataset: "production",
  plugins: [deskTool(), visionTool],
  schema: {
    types: schemas,
  },
});