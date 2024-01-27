import Newscard from "../components/newscard";
function News() {
  const newsData = [
    {
      title: "New Album Released",
      desc: "Titled Natsukusa ga Jama wo Suru released on related date",
    },
    {
      title: "New Song Released",
      desc: "for opening frieren, Yorushika relesade new song exclusively",
    },
  ];
  return (
    <div className="flex flex-col gap-2 bg-purple-400 h-96">
      {newsData.map((card) => (
        <Newscard {...card} key={card.title} />
      ))}
    </div>
  );
}

export default News;
