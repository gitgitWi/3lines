import { type NextPage } from "next";

import { DefaultLayout } from "@features/ui/layouts";
import { trpc } from "@/utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <DefaultLayout>
      <div className="flex w-full items-center justify-center text-2xl">
        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
      </div>
    </DefaultLayout>
  );
};

export default Home;
