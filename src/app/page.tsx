import ActorsBlock from "./components/ActorsBlock";
import CadrsBlock from "./components/CadrsBlock";
import MainBlock from "./components/MainBlock";
import MapBlock from "./components/MapBlock";

export default function Home() {
  return (
    <>
      <main className="gap-y-18 flex flex-col bg-[#000000]">
        <MainBlock description="Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ." />
        <ActorsBlock />
        <CadrsBlock />
        <MapBlock />
      </main>
      <footer></footer>
    </>
  );
}
