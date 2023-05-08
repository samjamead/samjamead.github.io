import Link from "next/link";
import DefaultListItem from "./defaultListItem";
import ListItem from "./listItem";
import QuoteListItem from "./quoteListItem";
import BookListItem from "./bookListItem";

// Icons
import CommitIcon from "../../public/img/icons/git-commit.svg";
import QuoteIcon from "../../public/img/icons/chevrons-right.svg";
import BookIcon from "../../public/img/icons/library.svg";

export default function MainPostList({ data }) {
  return (
    <ul className="main-post-list margin-bottom-double">
      {data.map((post) => {
        let type = post.type;

        if (!type) {
          return (
            <ListItem key={post.id} data={post} icon={CommitIcon}>
              <DefaultListItem data={post} />
            </ListItem>
          );
        } else if (type === "Quote") {
          return (
            <ListItem key={post.id} data={post} icon={QuoteIcon}>
              <QuoteListItem data={post} />
            </ListItem>
          );
        } else if (type === "Book") {
          return (
            <ListItem key={post.id} data={post} icon={BookIcon}>
              <BookListItem data={post} />
            </ListItem>
          );
        } else {
          return (
            <ListItem key={post.id} data={post} icon={CommitIcon}>
              <DefaultListItem data={post} />
            </ListItem>
          );
        }
      })}
    </ul>
  );
}
