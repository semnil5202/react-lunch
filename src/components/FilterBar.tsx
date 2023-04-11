import { Component } from 'react';

interface FilterBarProps {
  onChangeOptions: (filterOptions: { category: string; sort: string }) => void;
}

export default class FilterBar extends Component<FilterBarProps> {
  constructor(props: FilterBarProps) {
    super(props);
  }
  render() {
    return (
      <>
        <section>
          <select
            name="category"
            id="category-filter"
            className="restaurant-filter"
          >
            <option value="전체">전체</option>
            <option value="한식">한식</option>
            <option value="중식">중식</option>
            <option value="일식">일식</option>
            <option value="양식">양식</option>
            <option value="아시안">아시안</option>
            <option value="기타">기타</option>
          </select>

          <select
            name="sorting"
            id="sorting-filter"
            className="restaurant-filter"
          >
            <option value="name">이름순</option>
            <option value="distance">거리순</option>
          </select>
        </section>
      </>
    );
  }
}
