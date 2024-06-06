export interface NEO {
  links: object;
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: string;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: Array<CloseApproachData>;
  is_sentry_object: boolean;
}
interface EstimatedDiameter {
  kilometers: EstimatedDiameterElement;
  meters: EstimatedDiameterElement;
  miles: EstimatedDiameterElement;
  feet: EstimatedDiameterElement;
}
interface EstimatedDiameterElement {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}
interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: RelativeVelocity;
  miss_distance: MissDistance;
  orbiting_body: string;
}
interface RelativeVelocity {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
}
interface MissDistance {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}
