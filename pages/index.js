import fs from 'fs';

function Page({ msg }) {
  return <h1>{msg}</h1>;
}

export async function getServerSideProps() {
  await new Promise((resolve) => fs.stat('does-no-exist', () => resolve()));
  return { props: { msg: 'hello' } };
}

export default Page;
