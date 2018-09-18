drop table if exists users;
create table if not exists users (
  id serial primary key,
  email text unique,
  online_id text unique,
  password text,
  first_name text,
  last_name text,
  created text,
  admin BOOLEAN,
  profile_photo text
);

drop table if exists products;
create table if not exists products (
  id serial primary key,
  product_image text,
  product_name text,
  product_description text,
  category text,
  created text,
  users_id int REFERENCES users (id)
);

drop table if exists reviews;
create table if not exists reviews (
  id serial primary key,
  content text,
  created text,
  products_id int REFERENCES products (id),
  users_id int REFERENCES users (id)
); 

insert into users (
  email,
  online_id,
  password,
  first_name,
  last_name,
  created,
  admin,
  profile_photo
) 
values (
  'test@gmail.com',
  'testId',
  '1234',
  'Jin',
  'Park',
  'Created Date',
  true,
  'samplephoto.jpg'
)

insert into products (
  product_image,
  product_name,
  product_description,
  category,
  created,
  users_id
)
values (
  'sampleimg.test', 
  'Baseball Cap', 
  'Cool looking cap', 
  'Sports', 
  'created date', 
  1
)

insert into reviews (
  content,
  created,
  products_id,
  users_id
)
values (
  'This is cool cap',
  'date created',
  1,
  1
)

