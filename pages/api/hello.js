import fs from 'fs';

export default async function getServerSideProps() {
  await new Promise((resolve) => fs.stat('does-no-exist', () => resolve()));
  return { msg: 'hello' };
}

export const config = { runtime: 'experimental-edge' };
