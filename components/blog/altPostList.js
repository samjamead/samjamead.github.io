import DefaultListItem from "./defaultListItem";
import ListItem from "./altListItem";
import QuoteListItem from "./quoteListItem";
import BookListItem from "./bookListItem";
import { getSortedPostsData } from "../../lib/posts";

import Mouse1 from "../../public/img/icons/1.png";
import Mouse2 from "../../public/img/icons/2.png";
import Mouse3 from "../../public/img/icons/3.png";
import Mouse4 from "../../public/img/icons/4.png";
import Mouse5 from "../../public/img/icons/5.png";

export default function MainPostList() {
  const allPostsData = getSortedPostsData();

  return (
    <ul className="alt-post-list margin-bottom-double">
      {allPostsData.map((post) => {
        let category = post.category;

        if (!category) {
          return (
            <ListItem key={post.id} data={post} icon={Mouse1}>
              <DefaultListItem data={post} />
            </ListItem>
          );
        } else if (category === "Quote") {
          return (
            <ListItem key={post.id} data={post} icon={Mouse2}>
              <QuoteListItem data={post} />
            </ListItem>
          );
        } else if (category === "Book") {
          return (
            <ListItem key={post.id} data={post} icon={Mouse3}>
              <BookListItem data={post} />
            </ListItem>
          );
        } else if (category === "Mountain") {
          return (
            <ListItem key={post.id} data={post} icon={Mouse4}>
              <DefaultListItem data={post} />
            </ListItem>
          );
        } else {
          return (
            <ListItem key={post.id} data={post} icon={Mouse5}>
              <DefaultListItem data={post} />
            </ListItem>
          );
        }
      })}
    </ul>
  );
}
