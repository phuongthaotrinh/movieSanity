import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "37gmdlmd",
  dataset: "production",
  useCdn: false,
});

export default sanityClient