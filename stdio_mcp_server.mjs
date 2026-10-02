#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "remotechina",
  boardId: "remotechina-official",
  domain: "remote-china.com",
  npmName: "zc-remotechina-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
