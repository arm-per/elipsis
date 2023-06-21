import type {postResponse} from "../../interfaces";

const defaultPost: postResponse = {
    author: 1,
    categories: [1],
    date: new Date().toDateString(),
    excerpt: {
        protected: false,
        rendered: "<p>No pudimos cargar el contenido. Si el problema persiste, favor de contactarse a con el staff de revista elipsis en <a href='https://facebook.com/revistaelipsis' target='_blank' rel='noreferrer noopener'>facebook</a></p>"
    },
    title: {
        rendered: 'No pudimos cargar el contenido, intenta más tarde, por favor'
    },
    content: {
        protected: false,
        rendered: "<h1>Hello world</h1>"
    },
    featured_media: 0,
    format: 'standard',
    guid: {
        rendered: 'undefined',
    },
    id: 1,
    link: 'undefined',
    meta: [],
    ping_status: 'open',
    slug: "hello-world",
    status: "published",
    template: "",
    type: "post",
    featured_media_src_url: "http://localhost:10008/wp-content/uploads/2023/04/DALL·E-2023-04-01-01.52.07-a-mexican-plate-with-pancakes-and-a-glass-of-milkshake.png",
}

export default defaultPost;
