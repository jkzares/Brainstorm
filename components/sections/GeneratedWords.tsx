import SquetchIdeas from "./SqetchIdeas";

const GeneratedWords = ({ nouns }: { nouns: string[] }) => {

  function getRandomElements() {
    // Get two different random indices
    let index1 = Math.floor(Math.random() * nouns.length);
    let index2 = Math.floor(Math.random() * nouns.length);

    while (index2 === index1) {
      index2 = Math.floor(Math.random() * nouns.length);
    }

    // Return the two elements corresponding to the random indices
    return [nouns[index1], nouns[index2]];
  }

  const randomElements = getRandomElements();

  return (
    <section className="border-t border-neutral-300 flex justify-between min-h-[50vh] flex-row">
      {/*-------- Here goes the selected words ---------*/}
      <div className="flex-1 w-full h-auto p-4 ">

        <div className="border-b">
          <h2 className="h2"> Have no ideas?</h2>
          <p className="h3"> Build an idea related to  <span className="text-[#EFBC9B] font-bold underline"> {randomElements[0]} </span> and <span className="text-[#EFBC9B] font-bold underline"> {randomElements[1]} </span> </p>
        </div>

        <SquetchIdeas nouns={nouns}  />

      </div>
      <div className="w-[1px] h-auto bg-neutral-300 gr" />
      {/*-------- Random generated words ---------*/}
      <div className="flex-1 w-full h-auto  bg-gray-100">

        <div className="p-4 gap-4 lg:gap-10 flex flex-col">
          {nouns.map((word: string) => (
            <span className="h1 text-n-6" key={word}>{word}</span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default GeneratedWords
