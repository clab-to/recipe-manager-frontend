import SearchInput from '@/components/SearchInput';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    <>
      <div className="flex items-center p-5 space-x-5">
        <div className="text-3xl font-bold">Recipe Manager</div>
        <SearchInput />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
};

Header.propTypes = {};

export default Header;
