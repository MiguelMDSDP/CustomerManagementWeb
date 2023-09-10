import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <Input
        placeholder="Search..."
        value={searchQuery}
        size="large"
        onChange={handleInputChange}
        onPressEnter={handleSearch}
        addonAfter={<SearchOutlined onClick={handleSearch} />}
      />
    </div>
  );
};

export default SearchInput;
