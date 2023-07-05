import DefaultListItem from "./defaultListItem";
import ListItem from "./listItem";
import QuoteListItem from "./quoteListItem";
import BookListItem from "./bookListItem";
import { getSortedPostsData } from "../../lib/posts";

// Icons
import CommitIcon from "../../public/img/icons/git-commit.svg";
import QuoteIcon from "../../public/img/icons/chevrons-right.svg";
import BookIcon from "../../public/img/icons/library.svg";
import MountainIcon from "../../public/img/icons/mountain-snow.svg";

export default function MainPostList() {
  const allPostsData = getSortedPostsData();

  return (
    <ul className="main-post-list margin-bottom-double">
      {allPostsData.map((post) => {
        let category = post.category;

        if (!category) {
          return (
            <ListItem key={post.id} data={post} icon={CommitIcon}>
              <DefaultListItem data={post} />
            </ListItem>
          );
        } else if (category === "Quote") {
          return (
            <ListItem key={post.id} data={post} icon={QuoteIcon}>
              <QuoteListItem data={post} />
            </ListItem>
          );
        } else if (category === "Book") {
          return (
            <ListItem key={post.id} data={post} icon={BookIcon}>
              <BookListItem data={post} />
            </ListItem>
          );
        } else if (category === "Mountain") {
          return (
            <ListItem key={post.id} data={post} icon={MountainIcon}>
              <DefaultListItem data={post} />
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
