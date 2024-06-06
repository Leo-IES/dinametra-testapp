export interface ApiResponse {
  links: LinksElement;
  element_count: number;
  near_earth_objects: object;
}

interface LinksElement{
  next:string;
  previous:string;
  self:string;
}
