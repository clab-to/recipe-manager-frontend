import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <h1>がんもどき</h1>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <h1>作成者: TestUser</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex">
        <div className="w-1/4 mx-5 my-3">
          <div className="m-2">材料</div>
          <ol className="list-decimal">
            <li className="flex space-x-2">
              <p>醤油</p>
              <p>50cc</p>
            </li>
            <li className="flex space-x-2">
              <p>水</p>
              <p>50cc</p>
            </li>
            <li className="flex space-x-2">
              <p>ビール</p>
              <p>50cc</p>
            </li>
            <li className="flex space-x-2">
              <p>すじ肉</p>
              <p>50cc</p>
            </li>
          </ol>
        </div>
        <div className="w-3/4 mx-5 my-3">
          <div className="m-2">調理手順</div>
          <ol type="1" className="space-y-3">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae tempora commodi
              eveniet, ad itaque excepturi recusandae deserunt dolorum adipisci, est suscipit.
              Consequatur, recusandae distinctio aspernatur sapiente nemo sequi ratione, odio,
              incidunt dolorem laudantium sed pariatur vero! Autem error culpa iusto, laudantium
              officia harum fugiat adipisci nisi iure dignissimos inventore? Impedit!
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae tempora commodi
              eveniet, ad itaque excepturi recusandae deserunt dolorum adipisci, est suscipit.
              Consequatur, recusandae distinctio aspernatur sapiente nemo sequi ratione, odio,
              incidunt dolorem laudantium sed pariatur vero! Autem error culpa iusto, laudantium
              officia harum fugiat adipisci nisi iure dignissimos inventore? Impedit!
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae tempora commodi
              eveniet, ad itaque excepturi recusandae deserunt dolorum adipisci, est suscipit.
              Consequatur, recusandae distinctio aspernatur sapiente nemo sequi ratione, odio,
              incidunt dolorem laudantium sed pariatur vero! Autem error culpa iusto, laudantium
              officia harum fugiat adipisci nisi iure dignissimos inventore? Impedit!
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
