import Link from "next/link";
function F1() {
  return (
    <>
      <h1>F1</h1>
      <div>
        <Link href={"/f1/f2"}>Go to F2</Link>
      </div>
      <div>
        <Link href={"/f3"}>Go to F3</Link>
      </div>
    </>
  );
}

export default F1;
