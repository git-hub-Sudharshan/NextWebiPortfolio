// src/utils/slugify.js
import slugify from "slugify";

const slugifyTitle = (text) => slugify(text, { lower: true });

export default slugifyTitle;
