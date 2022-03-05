const { prop } = require('typegoose');
import { getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

class Post {

    static new() {
        const instance = new Post();
        return instance;
    }

    @prop()
    author_id: string = '';

    @prop()
    title: string = '';

    @prop()
    content_html: string = '';

    @prop()
    likes: number =  0;
}

const PostModel = getModelForClass(Post,  {
    schemaOptions: { collection: 'Posts' }
});

export { Post, PostModel };

