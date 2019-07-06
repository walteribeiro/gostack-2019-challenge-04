import React from "react";

class PostList extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Walter Ribeiro",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Bom dia, alguma empresa contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "João da Silva",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };
}

export default PostList;
