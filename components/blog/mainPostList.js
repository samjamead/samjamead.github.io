import Link from "next/link";
import DefaultListItem from "./defaultListItem";
import ListItem from "./listItem";
import QuoteListItem from "./quoteListItem";

export default function MainPostList({ data }) {
  return (
    <ul className="main-post-list margin-bottom-double">
      {data.map((post) => {
        let type = post.type;

        if (!type) {
          return (
            <ListItem data={post}>
              <DefaultListItem data={post} />
            </ListItem>
          );
        } else if (type === "Quote") {
          return (
            <ListItem data={post}>
              <QuoteListItem data={post} />
            </ListItem>
          );
        } else {
          return <DefaultListItem />;
        }
      })}
    </ul>
  );
}
