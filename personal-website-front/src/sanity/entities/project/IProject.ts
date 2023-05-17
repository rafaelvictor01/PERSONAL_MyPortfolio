import { IBaseEntitySanity } from "@/sanity/common/interfaces/IBaseEntitySanity";
import { TextAreaTP } from "@/sanity/common/types/SanityTypes";

export default interface IProject extends IBaseEntitySanity {
  name: string;
  slug: string;
  image: string;
  url: string;
  content: TextAreaTP;
}
