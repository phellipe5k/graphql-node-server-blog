import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';
import { Post } from './Post';

class Author {

    static new() {
        const instance = new Author();
        return instance;
    }
    
    @prop()
    id: string = '';

    @prop()
    name: string = '';

    @prop()
    profileImgUrl: string = '';

    @prop()
    biography: string = '';

    @prop({default: 0})
    followers: number = 0;

    @prop({ items: Post, default: [] })
    Posts: Post[] = [];
    
}

const AuthorModel = getModelForClass(Author,  {
    schemaOptions: { collection: 'Authors' }
});

export { Author, AuthorModel };
