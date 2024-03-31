"use server";
import dataForge from 'data-forge';
import 'data-forge-fs';

export async function useGetNouns(quantity: number): Promise<string[]> {
    return new Promise<string[]>((resolve) => {
        const df = dataForge.readFileSync("nounlist.csv").parseCSV();
        const rowCount = df.count();

        const randomNoun = () => {
            const i = Math.round(Math.random() * rowCount);
            return df.at(i).Joke;
        }

        console.log(randomNoun)


        setTimeout(() => {
            const nouns = ["Dog", "Cat", "Chair", "Book", "Table", "Car", "Computer", "Phone", "House", "Tree"];
            resolve(nouns);
        }, 2000);
    });
}