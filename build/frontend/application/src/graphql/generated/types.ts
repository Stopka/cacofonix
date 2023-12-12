import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  JSON: any;
  JSONObject: any;
};

export type Access = {
  __typename?: 'Access';
  artists?: Maybe<ArtistsAccess>;
  canAccessAdmin: Scalars['Boolean'];
  media?: Maybe<MediaAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  performances?: Maybe<PerformancesAccess>;
  performers?: Maybe<PerformersAccess>;
  settings?: Maybe<SettingsAccess>;
  shows?: Maybe<ShowsAccess>;
  songs?: Maybe<SongsAccess>;
  users?: Maybe<UsersAccess>;
};

export type Artist = {
  __typename?: 'Artist';
  _status?: Maybe<Artist__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};


export type ArtistDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export enum ArtistUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type ArtistVersion = {
  __typename?: 'ArtistVersion';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  latest?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Artist>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<ArtistVersion_Version>;
};


export type ArtistVersionParentArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type ArtistVersion_Version = {
  __typename?: 'ArtistVersion_Version';
  _status?: Maybe<ArtistVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};


export type ArtistVersion_VersionDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export enum ArtistVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Artist__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Artist__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Artist__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Artist__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Artist__Status_Input>>>;
  equals?: InputMaybe<Artist__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Artist__Status_Input>>>;
  not_equals?: InputMaybe<Artist__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Artist__Status_Input>>>;
};

export type Artist_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Artist_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Artist_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Artist_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Artist_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Artist_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Artist_Where = {
  AND?: InputMaybe<Array<InputMaybe<Artist_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Artist_Where_Or>>>;
  _status?: InputMaybe<Artist__Status_Operator>;
  createdAt?: InputMaybe<Artist_CreatedAt_Operator>;
  description?: InputMaybe<Artist_Description_Operator>;
  id?: InputMaybe<Artist_Id_Operator>;
  title?: InputMaybe<Artist_Title_Operator>;
  updatedAt?: InputMaybe<Artist_UpdatedAt_Operator>;
  url?: InputMaybe<Artist_Url_Operator>;
};

export type Artist_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Artist_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Artist_Where_Or>>>;
  _status?: InputMaybe<Artist__Status_Operator>;
  createdAt?: InputMaybe<Artist_CreatedAt_Operator>;
  description?: InputMaybe<Artist_Description_Operator>;
  id?: InputMaybe<Artist_Id_Operator>;
  title?: InputMaybe<Artist_Title_Operator>;
  updatedAt?: InputMaybe<Artist_UpdatedAt_Operator>;
  url?: InputMaybe<Artist_Url_Operator>;
};

export type Artist_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Artist_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Artist_Where_Or>>>;
  _status?: InputMaybe<Artist__Status_Operator>;
  createdAt?: InputMaybe<Artist_CreatedAt_Operator>;
  description?: InputMaybe<Artist_Description_Operator>;
  id?: InputMaybe<Artist_Id_Operator>;
  title?: InputMaybe<Artist_Title_Operator>;
  updatedAt?: InputMaybe<Artist_UpdatedAt_Operator>;
  url?: InputMaybe<Artist_Url_Operator>;
};

export type Artists = {
  __typename?: 'Artists';
  docs?: Maybe<Array<Maybe<Artist>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type ArtistsCreateAccess = {
  __typename?: 'ArtistsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArtistsCreateDocAccess = {
  __typename?: 'ArtistsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArtistsDeleteAccess = {
  __typename?: 'ArtistsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArtistsDeleteDocAccess = {
  __typename?: 'ArtistsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArtistsDocAccessFields = {
  __typename?: 'ArtistsDocAccessFields';
  _status?: Maybe<ArtistsDocAccessFields__Status>;
  createdAt?: Maybe<ArtistsDocAccessFields_CreatedAt>;
  description?: Maybe<ArtistsDocAccessFields_Description>;
  title?: Maybe<ArtistsDocAccessFields_Title>;
  updatedAt?: Maybe<ArtistsDocAccessFields_UpdatedAt>;
  url?: Maybe<ArtistsDocAccessFields_Url>;
};

export type ArtistsDocAccessFields__Status = {
  __typename?: 'ArtistsDocAccessFields__status';
  create?: Maybe<ArtistsDocAccessFields__Status_Create>;
  delete?: Maybe<ArtistsDocAccessFields__Status_Delete>;
  read?: Maybe<ArtistsDocAccessFields__Status_Read>;
  update?: Maybe<ArtistsDocAccessFields__Status_Update>;
};

export type ArtistsDocAccessFields__Status_Create = {
  __typename?: 'ArtistsDocAccessFields__status_Create';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields__Status_Delete = {
  __typename?: 'ArtistsDocAccessFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields__Status_Read = {
  __typename?: 'ArtistsDocAccessFields__status_Read';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields__Status_Update = {
  __typename?: 'ArtistsDocAccessFields__status_Update';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_CreatedAt = {
  __typename?: 'ArtistsDocAccessFields_createdAt';
  create?: Maybe<ArtistsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ArtistsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ArtistsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ArtistsDocAccessFields_CreatedAt_Update>;
};

export type ArtistsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ArtistsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ArtistsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ArtistsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ArtistsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_Description = {
  __typename?: 'ArtistsDocAccessFields_description';
  create?: Maybe<ArtistsDocAccessFields_Description_Create>;
  delete?: Maybe<ArtistsDocAccessFields_Description_Delete>;
  read?: Maybe<ArtistsDocAccessFields_Description_Read>;
  update?: Maybe<ArtistsDocAccessFields_Description_Update>;
};

export type ArtistsDocAccessFields_Description_Create = {
  __typename?: 'ArtistsDocAccessFields_description_Create';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_Description_Delete = {
  __typename?: 'ArtistsDocAccessFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_Description_Read = {
  __typename?: 'ArtistsDocAccessFields_description_Read';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_Description_Update = {
  __typename?: 'ArtistsDocAccessFields_description_Update';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_Title = {
  __typename?: 'ArtistsDocAccessFields_title';
  create?: Maybe<ArtistsDocAccessFields_Title_Create>;
  delete?: Maybe<ArtistsDocAccessFields_Title_Delete>;
  read?: Maybe<ArtistsDocAccessFields_Title_Read>;
  update?: Maybe<ArtistsDocAccessFields_Title_Update>;
};

export type ArtistsDocAccessFields_Title_Create = {
  __typename?: 'ArtistsDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_Title_Delete = {
  __typename?: 'ArtistsDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_Title_Read = {
  __typename?: 'ArtistsDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_Title_Update = {
  __typename?: 'ArtistsDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_UpdatedAt = {
  __typename?: 'ArtistsDocAccessFields_updatedAt';
  create?: Maybe<ArtistsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ArtistsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ArtistsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ArtistsDocAccessFields_UpdatedAt_Update>;
};

export type ArtistsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ArtistsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ArtistsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ArtistsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ArtistsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_Url = {
  __typename?: 'ArtistsDocAccessFields_url';
  create?: Maybe<ArtistsDocAccessFields_Url_Create>;
  delete?: Maybe<ArtistsDocAccessFields_Url_Delete>;
  read?: Maybe<ArtistsDocAccessFields_Url_Read>;
  update?: Maybe<ArtistsDocAccessFields_Url_Update>;
};

export type ArtistsDocAccessFields_Url_Create = {
  __typename?: 'ArtistsDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_Url_Delete = {
  __typename?: 'ArtistsDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_Url_Read = {
  __typename?: 'ArtistsDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type ArtistsDocAccessFields_Url_Update = {
  __typename?: 'ArtistsDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type ArtistsFields = {
  __typename?: 'ArtistsFields';
  _status?: Maybe<ArtistsFields__Status>;
  createdAt?: Maybe<ArtistsFields_CreatedAt>;
  description?: Maybe<ArtistsFields_Description>;
  title?: Maybe<ArtistsFields_Title>;
  updatedAt?: Maybe<ArtistsFields_UpdatedAt>;
  url?: Maybe<ArtistsFields_Url>;
};

export type ArtistsFields__Status = {
  __typename?: 'ArtistsFields__status';
  create?: Maybe<ArtistsFields__Status_Create>;
  delete?: Maybe<ArtistsFields__Status_Delete>;
  read?: Maybe<ArtistsFields__Status_Read>;
  update?: Maybe<ArtistsFields__Status_Update>;
};

export type ArtistsFields__Status_Create = {
  __typename?: 'ArtistsFields__status_Create';
  permission: Scalars['Boolean'];
};

export type ArtistsFields__Status_Delete = {
  __typename?: 'ArtistsFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type ArtistsFields__Status_Read = {
  __typename?: 'ArtistsFields__status_Read';
  permission: Scalars['Boolean'];
};

export type ArtistsFields__Status_Update = {
  __typename?: 'ArtistsFields__status_Update';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_CreatedAt = {
  __typename?: 'ArtistsFields_createdAt';
  create?: Maybe<ArtistsFields_CreatedAt_Create>;
  delete?: Maybe<ArtistsFields_CreatedAt_Delete>;
  read?: Maybe<ArtistsFields_CreatedAt_Read>;
  update?: Maybe<ArtistsFields_CreatedAt_Update>;
};

export type ArtistsFields_CreatedAt_Create = {
  __typename?: 'ArtistsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_CreatedAt_Delete = {
  __typename?: 'ArtistsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_CreatedAt_Read = {
  __typename?: 'ArtistsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_CreatedAt_Update = {
  __typename?: 'ArtistsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_Description = {
  __typename?: 'ArtistsFields_description';
  create?: Maybe<ArtistsFields_Description_Create>;
  delete?: Maybe<ArtistsFields_Description_Delete>;
  read?: Maybe<ArtistsFields_Description_Read>;
  update?: Maybe<ArtistsFields_Description_Update>;
};

export type ArtistsFields_Description_Create = {
  __typename?: 'ArtistsFields_description_Create';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_Description_Delete = {
  __typename?: 'ArtistsFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_Description_Read = {
  __typename?: 'ArtistsFields_description_Read';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_Description_Update = {
  __typename?: 'ArtistsFields_description_Update';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_Title = {
  __typename?: 'ArtistsFields_title';
  create?: Maybe<ArtistsFields_Title_Create>;
  delete?: Maybe<ArtistsFields_Title_Delete>;
  read?: Maybe<ArtistsFields_Title_Read>;
  update?: Maybe<ArtistsFields_Title_Update>;
};

export type ArtistsFields_Title_Create = {
  __typename?: 'ArtistsFields_title_Create';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_Title_Delete = {
  __typename?: 'ArtistsFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_Title_Read = {
  __typename?: 'ArtistsFields_title_Read';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_Title_Update = {
  __typename?: 'ArtistsFields_title_Update';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_UpdatedAt = {
  __typename?: 'ArtistsFields_updatedAt';
  create?: Maybe<ArtistsFields_UpdatedAt_Create>;
  delete?: Maybe<ArtistsFields_UpdatedAt_Delete>;
  read?: Maybe<ArtistsFields_UpdatedAt_Read>;
  update?: Maybe<ArtistsFields_UpdatedAt_Update>;
};

export type ArtistsFields_UpdatedAt_Create = {
  __typename?: 'ArtistsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_UpdatedAt_Delete = {
  __typename?: 'ArtistsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_UpdatedAt_Read = {
  __typename?: 'ArtistsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_UpdatedAt_Update = {
  __typename?: 'ArtistsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_Url = {
  __typename?: 'ArtistsFields_url';
  create?: Maybe<ArtistsFields_Url_Create>;
  delete?: Maybe<ArtistsFields_Url_Delete>;
  read?: Maybe<ArtistsFields_Url_Read>;
  update?: Maybe<ArtistsFields_Url_Update>;
};

export type ArtistsFields_Url_Create = {
  __typename?: 'ArtistsFields_url_Create';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_Url_Delete = {
  __typename?: 'ArtistsFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_Url_Read = {
  __typename?: 'ArtistsFields_url_Read';
  permission: Scalars['Boolean'];
};

export type ArtistsFields_Url_Update = {
  __typename?: 'ArtistsFields_url_Update';
  permission: Scalars['Boolean'];
};

export type ArtistsReadAccess = {
  __typename?: 'ArtistsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArtistsReadDocAccess = {
  __typename?: 'ArtistsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArtistsReadVersionsAccess = {
  __typename?: 'ArtistsReadVersionsAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArtistsReadVersionsDocAccess = {
  __typename?: 'ArtistsReadVersionsDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArtistsUpdateAccess = {
  __typename?: 'ArtistsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArtistsUpdateDocAccess = {
  __typename?: 'ArtistsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export enum FallbackLocaleInputType {
  En = 'en',
  None = 'none'
}

export enum LocaleInputType {
  En = 'en'
}

export type Media = {
  __typename?: 'Media';
  alt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  title?: Maybe<MediaDocAccessFields_Title>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Title = {
  __typename?: 'MediaDocAccessFields_title';
  create?: Maybe<MediaDocAccessFields_Title_Create>;
  delete?: Maybe<MediaDocAccessFields_Title_Delete>;
  read?: Maybe<MediaDocAccessFields_Title_Read>;
  update?: Maybe<MediaDocAccessFields_Title_Update>;
};

export type MediaDocAccessFields_Title_Create = {
  __typename?: 'MediaDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Title_Delete = {
  __typename?: 'MediaDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Title_Read = {
  __typename?: 'MediaDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Title_Update = {
  __typename?: 'MediaDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  title?: Maybe<MediaFields_Title>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Title = {
  __typename?: 'MediaFields_title';
  create?: Maybe<MediaFields_Title_Create>;
  delete?: Maybe<MediaFields_Title_Delete>;
  read?: Maybe<MediaFields_Title_Read>;
  update?: Maybe<MediaFields_Title_Update>;
};

export type MediaFields_Title_Create = {
  __typename?: 'MediaFields_title_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Title_Delete = {
  __typename?: 'MediaFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Title_Read = {
  __typename?: 'MediaFields_title_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Title_Update = {
  __typename?: 'MediaFields_title_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  title?: InputMaybe<Media_Title_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  title?: InputMaybe<Media_Title_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  title?: InputMaybe<Media_Title_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArtist?: Maybe<Artist>;
  createMedia?: Maybe<Media>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createPerformance?: Maybe<Performance>;
  createPerformer?: Maybe<Performer>;
  createShow?: Maybe<Show>;
  createSong?: Maybe<Song>;
  createUser?: Maybe<User>;
  deleteArtist?: Maybe<Artist>;
  deleteMedia?: Maybe<Media>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deletePerformance?: Maybe<Performance>;
  deletePerformer?: Maybe<Performer>;
  deleteShow?: Maybe<Show>;
  deleteSong?: Maybe<Song>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  restoreVersionArtist?: Maybe<Artist>;
  restoreVersionPerformance?: Maybe<Performance>;
  restoreVersionPerformer?: Maybe<Performer>;
  restoreVersionSetting?: Maybe<Setting>;
  restoreVersionShow?: Maybe<Show>;
  restoreVersionSong?: Maybe<Song>;
  unlockUser: Scalars['Boolean'];
  updateArtist?: Maybe<Artist>;
  updateMedia?: Maybe<Media>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updatePerformance?: Maybe<Performance>;
  updatePerformer?: Maybe<Performer>;
  updateSetting?: Maybe<Setting>;
  updateShow?: Maybe<Show>;
  updateSong?: Maybe<Song>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateArtistArgs = {
  data: MutationArtistInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreatePerformanceArgs = {
  data: MutationPerformanceInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreatePerformerArgs = {
  data: MutationPerformerInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateShowArgs = {
  data: MutationShowInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateSongArgs = {
  data: MutationSongInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationDeleteArtistArgs = {
  id: Scalars['String'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String'];
};


export type MutationDeletePerformanceArgs = {
  id: Scalars['String'];
};


export type MutationDeletePerformerArgs = {
  id: Scalars['String'];
};


export type MutationDeleteShowArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSongArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  expiration?: InputMaybe<Scalars['Int']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationRestoreVersionArtistArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationRestoreVersionPerformanceArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationRestoreVersionPerformerArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationRestoreVersionSettingArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationRestoreVersionShowArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationRestoreVersionSongArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String'];
};


export type MutationUpdateArtistArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationArtistUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdatePerformanceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPerformanceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdatePerformerArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPerformerUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateSettingArgs = {
  data: MutationSettingInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateShowArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationShowUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateSongArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationSongUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']>;
};


export type PayloadPreferenceUserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  intersects?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  within?: InputMaybe<Scalars['JSON']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Performance = {
  __typename?: 'Performance';
  _status?: Maybe<Performance__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PerformanceDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export enum PerformanceUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type PerformanceVersion = {
  __typename?: 'PerformanceVersion';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  latest?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Performance>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<PerformanceVersion_Version>;
};


export type PerformanceVersionParentArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PerformanceVersion_Version = {
  __typename?: 'PerformanceVersion_Version';
  _status?: Maybe<PerformanceVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PerformanceVersion_VersionDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export enum PerformanceVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Performance__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Performance__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Performance__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Performance__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Performance__Status_Input>>>;
  equals?: InputMaybe<Performance__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Performance__Status_Input>>>;
  not_equals?: InputMaybe<Performance__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Performance__Status_Input>>>;
};

export type Performance_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Performance_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Performance_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Performance_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Performance_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Performance_Where = {
  AND?: InputMaybe<Array<InputMaybe<Performance_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Performance_Where_Or>>>;
  _status?: InputMaybe<Performance__Status_Operator>;
  createdAt?: InputMaybe<Performance_CreatedAt_Operator>;
  description?: InputMaybe<Performance_Description_Operator>;
  id?: InputMaybe<Performance_Id_Operator>;
  title?: InputMaybe<Performance_Title_Operator>;
  updatedAt?: InputMaybe<Performance_UpdatedAt_Operator>;
};

export type Performance_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Performance_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Performance_Where_Or>>>;
  _status?: InputMaybe<Performance__Status_Operator>;
  createdAt?: InputMaybe<Performance_CreatedAt_Operator>;
  description?: InputMaybe<Performance_Description_Operator>;
  id?: InputMaybe<Performance_Id_Operator>;
  title?: InputMaybe<Performance_Title_Operator>;
  updatedAt?: InputMaybe<Performance_UpdatedAt_Operator>;
};

export type Performance_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Performance_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Performance_Where_Or>>>;
  _status?: InputMaybe<Performance__Status_Operator>;
  createdAt?: InputMaybe<Performance_CreatedAt_Operator>;
  description?: InputMaybe<Performance_Description_Operator>;
  id?: InputMaybe<Performance_Id_Operator>;
  title?: InputMaybe<Performance_Title_Operator>;
  updatedAt?: InputMaybe<Performance_UpdatedAt_Operator>;
};

export type Performances = {
  __typename?: 'Performances';
  docs?: Maybe<Array<Maybe<Performance>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PerformancesCreateAccess = {
  __typename?: 'PerformancesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformancesCreateDocAccess = {
  __typename?: 'PerformancesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformancesDeleteAccess = {
  __typename?: 'PerformancesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformancesDeleteDocAccess = {
  __typename?: 'PerformancesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformancesDocAccessFields = {
  __typename?: 'PerformancesDocAccessFields';
  _status?: Maybe<PerformancesDocAccessFields__Status>;
  createdAt?: Maybe<PerformancesDocAccessFields_CreatedAt>;
  description?: Maybe<PerformancesDocAccessFields_Description>;
  title?: Maybe<PerformancesDocAccessFields_Title>;
  updatedAt?: Maybe<PerformancesDocAccessFields_UpdatedAt>;
};

export type PerformancesDocAccessFields__Status = {
  __typename?: 'PerformancesDocAccessFields__status';
  create?: Maybe<PerformancesDocAccessFields__Status_Create>;
  delete?: Maybe<PerformancesDocAccessFields__Status_Delete>;
  read?: Maybe<PerformancesDocAccessFields__Status_Read>;
  update?: Maybe<PerformancesDocAccessFields__Status_Update>;
};

export type PerformancesDocAccessFields__Status_Create = {
  __typename?: 'PerformancesDocAccessFields__status_Create';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields__Status_Delete = {
  __typename?: 'PerformancesDocAccessFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields__Status_Read = {
  __typename?: 'PerformancesDocAccessFields__status_Read';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields__Status_Update = {
  __typename?: 'PerformancesDocAccessFields__status_Update';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_CreatedAt = {
  __typename?: 'PerformancesDocAccessFields_createdAt';
  create?: Maybe<PerformancesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PerformancesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PerformancesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PerformancesDocAccessFields_CreatedAt_Update>;
};

export type PerformancesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PerformancesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PerformancesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PerformancesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PerformancesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_Description = {
  __typename?: 'PerformancesDocAccessFields_description';
  create?: Maybe<PerformancesDocAccessFields_Description_Create>;
  delete?: Maybe<PerformancesDocAccessFields_Description_Delete>;
  read?: Maybe<PerformancesDocAccessFields_Description_Read>;
  update?: Maybe<PerformancesDocAccessFields_Description_Update>;
};

export type PerformancesDocAccessFields_Description_Create = {
  __typename?: 'PerformancesDocAccessFields_description_Create';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_Description_Delete = {
  __typename?: 'PerformancesDocAccessFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_Description_Read = {
  __typename?: 'PerformancesDocAccessFields_description_Read';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_Description_Update = {
  __typename?: 'PerformancesDocAccessFields_description_Update';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_Title = {
  __typename?: 'PerformancesDocAccessFields_title';
  create?: Maybe<PerformancesDocAccessFields_Title_Create>;
  delete?: Maybe<PerformancesDocAccessFields_Title_Delete>;
  read?: Maybe<PerformancesDocAccessFields_Title_Read>;
  update?: Maybe<PerformancesDocAccessFields_Title_Update>;
};

export type PerformancesDocAccessFields_Title_Create = {
  __typename?: 'PerformancesDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_Title_Delete = {
  __typename?: 'PerformancesDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_Title_Read = {
  __typename?: 'PerformancesDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_Title_Update = {
  __typename?: 'PerformancesDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_UpdatedAt = {
  __typename?: 'PerformancesDocAccessFields_updatedAt';
  create?: Maybe<PerformancesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PerformancesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PerformancesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PerformancesDocAccessFields_UpdatedAt_Update>;
};

export type PerformancesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PerformancesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PerformancesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PerformancesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PerformancesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PerformancesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PerformancesFields = {
  __typename?: 'PerformancesFields';
  _status?: Maybe<PerformancesFields__Status>;
  createdAt?: Maybe<PerformancesFields_CreatedAt>;
  description?: Maybe<PerformancesFields_Description>;
  title?: Maybe<PerformancesFields_Title>;
  updatedAt?: Maybe<PerformancesFields_UpdatedAt>;
};

export type PerformancesFields__Status = {
  __typename?: 'PerformancesFields__status';
  create?: Maybe<PerformancesFields__Status_Create>;
  delete?: Maybe<PerformancesFields__Status_Delete>;
  read?: Maybe<PerformancesFields__Status_Read>;
  update?: Maybe<PerformancesFields__Status_Update>;
};

export type PerformancesFields__Status_Create = {
  __typename?: 'PerformancesFields__status_Create';
  permission: Scalars['Boolean'];
};

export type PerformancesFields__Status_Delete = {
  __typename?: 'PerformancesFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type PerformancesFields__Status_Read = {
  __typename?: 'PerformancesFields__status_Read';
  permission: Scalars['Boolean'];
};

export type PerformancesFields__Status_Update = {
  __typename?: 'PerformancesFields__status_Update';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_CreatedAt = {
  __typename?: 'PerformancesFields_createdAt';
  create?: Maybe<PerformancesFields_CreatedAt_Create>;
  delete?: Maybe<PerformancesFields_CreatedAt_Delete>;
  read?: Maybe<PerformancesFields_CreatedAt_Read>;
  update?: Maybe<PerformancesFields_CreatedAt_Update>;
};

export type PerformancesFields_CreatedAt_Create = {
  __typename?: 'PerformancesFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_CreatedAt_Delete = {
  __typename?: 'PerformancesFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_CreatedAt_Read = {
  __typename?: 'PerformancesFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_CreatedAt_Update = {
  __typename?: 'PerformancesFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_Description = {
  __typename?: 'PerformancesFields_description';
  create?: Maybe<PerformancesFields_Description_Create>;
  delete?: Maybe<PerformancesFields_Description_Delete>;
  read?: Maybe<PerformancesFields_Description_Read>;
  update?: Maybe<PerformancesFields_Description_Update>;
};

export type PerformancesFields_Description_Create = {
  __typename?: 'PerformancesFields_description_Create';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_Description_Delete = {
  __typename?: 'PerformancesFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_Description_Read = {
  __typename?: 'PerformancesFields_description_Read';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_Description_Update = {
  __typename?: 'PerformancesFields_description_Update';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_Title = {
  __typename?: 'PerformancesFields_title';
  create?: Maybe<PerformancesFields_Title_Create>;
  delete?: Maybe<PerformancesFields_Title_Delete>;
  read?: Maybe<PerformancesFields_Title_Read>;
  update?: Maybe<PerformancesFields_Title_Update>;
};

export type PerformancesFields_Title_Create = {
  __typename?: 'PerformancesFields_title_Create';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_Title_Delete = {
  __typename?: 'PerformancesFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_Title_Read = {
  __typename?: 'PerformancesFields_title_Read';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_Title_Update = {
  __typename?: 'PerformancesFields_title_Update';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_UpdatedAt = {
  __typename?: 'PerformancesFields_updatedAt';
  create?: Maybe<PerformancesFields_UpdatedAt_Create>;
  delete?: Maybe<PerformancesFields_UpdatedAt_Delete>;
  read?: Maybe<PerformancesFields_UpdatedAt_Read>;
  update?: Maybe<PerformancesFields_UpdatedAt_Update>;
};

export type PerformancesFields_UpdatedAt_Create = {
  __typename?: 'PerformancesFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_UpdatedAt_Delete = {
  __typename?: 'PerformancesFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_UpdatedAt_Read = {
  __typename?: 'PerformancesFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PerformancesFields_UpdatedAt_Update = {
  __typename?: 'PerformancesFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PerformancesReadAccess = {
  __typename?: 'PerformancesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformancesReadDocAccess = {
  __typename?: 'PerformancesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformancesReadVersionsAccess = {
  __typename?: 'PerformancesReadVersionsAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformancesReadVersionsDocAccess = {
  __typename?: 'PerformancesReadVersionsDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformancesUpdateAccess = {
  __typename?: 'PerformancesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformancesUpdateDocAccess = {
  __typename?: 'PerformancesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Performer = {
  __typename?: 'Performer';
  _status?: Maybe<Performer__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PerformerDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type PerformerImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  where?: InputMaybe<Performer_Image_Where>;
};

export enum PerformerUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type PerformerVersion = {
  __typename?: 'PerformerVersion';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  latest?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Performer>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<PerformerVersion_Version>;
};


export type PerformerVersionParentArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PerformerVersion_Version = {
  __typename?: 'PerformerVersion_Version';
  _status?: Maybe<PerformerVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PerformerVersion_VersionDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type PerformerVersion_VersionImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  where?: InputMaybe<PerformerVersion_Version_Image_Where>;
};

export type PerformerVersion_Version_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PerformerVersion_Version_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PerformerVersion_Version_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PerformerVersion_Version_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type PerformerVersion_Version_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type PerformerVersion_Version_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PerformerVersion_Version_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PerformerVersion_Version_Image_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PerformerVersion_Version_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PerformerVersion_Version_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PerformerVersion_Version_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<PerformerVersion_Version_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PerformerVersion_Version_Image_Where_Or>>>;
  alt?: InputMaybe<PerformerVersion_Version_Image_Alt_Operator>;
  createdAt?: InputMaybe<PerformerVersion_Version_Image_CreatedAt_Operator>;
  filename?: InputMaybe<PerformerVersion_Version_Image_Filename_Operator>;
  filesize?: InputMaybe<PerformerVersion_Version_Image_Filesize_Operator>;
  height?: InputMaybe<PerformerVersion_Version_Image_Height_Operator>;
  id?: InputMaybe<PerformerVersion_Version_Image_Id_Operator>;
  mimeType?: InputMaybe<PerformerVersion_Version_Image_MimeType_Operator>;
  title?: InputMaybe<PerformerVersion_Version_Image_Title_Operator>;
  updatedAt?: InputMaybe<PerformerVersion_Version_Image_UpdatedAt_Operator>;
  url?: InputMaybe<PerformerVersion_Version_Image_Url_Operator>;
  width?: InputMaybe<PerformerVersion_Version_Image_Width_Operator>;
};

export type PerformerVersion_Version_Image_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PerformerVersion_Version_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PerformerVersion_Version_Image_Where_Or>>>;
  alt?: InputMaybe<PerformerVersion_Version_Image_Alt_Operator>;
  createdAt?: InputMaybe<PerformerVersion_Version_Image_CreatedAt_Operator>;
  filename?: InputMaybe<PerformerVersion_Version_Image_Filename_Operator>;
  filesize?: InputMaybe<PerformerVersion_Version_Image_Filesize_Operator>;
  height?: InputMaybe<PerformerVersion_Version_Image_Height_Operator>;
  id?: InputMaybe<PerformerVersion_Version_Image_Id_Operator>;
  mimeType?: InputMaybe<PerformerVersion_Version_Image_MimeType_Operator>;
  title?: InputMaybe<PerformerVersion_Version_Image_Title_Operator>;
  updatedAt?: InputMaybe<PerformerVersion_Version_Image_UpdatedAt_Operator>;
  url?: InputMaybe<PerformerVersion_Version_Image_Url_Operator>;
  width?: InputMaybe<PerformerVersion_Version_Image_Width_Operator>;
};

export type PerformerVersion_Version_Image_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PerformerVersion_Version_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PerformerVersion_Version_Image_Where_Or>>>;
  alt?: InputMaybe<PerformerVersion_Version_Image_Alt_Operator>;
  createdAt?: InputMaybe<PerformerVersion_Version_Image_CreatedAt_Operator>;
  filename?: InputMaybe<PerformerVersion_Version_Image_Filename_Operator>;
  filesize?: InputMaybe<PerformerVersion_Version_Image_Filesize_Operator>;
  height?: InputMaybe<PerformerVersion_Version_Image_Height_Operator>;
  id?: InputMaybe<PerformerVersion_Version_Image_Id_Operator>;
  mimeType?: InputMaybe<PerformerVersion_Version_Image_MimeType_Operator>;
  title?: InputMaybe<PerformerVersion_Version_Image_Title_Operator>;
  updatedAt?: InputMaybe<PerformerVersion_Version_Image_UpdatedAt_Operator>;
  url?: InputMaybe<PerformerVersion_Version_Image_Url_Operator>;
  width?: InputMaybe<PerformerVersion_Version_Image_Width_Operator>;
};

export type PerformerVersion_Version_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export enum PerformerVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type Performer_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Performer_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Performer_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Performer_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Performer_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Performer_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Performer_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Performer_Image_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Performer_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Performer_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Performer_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<Performer_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Performer_Image_Where_Or>>>;
  alt?: InputMaybe<Performer_Image_Alt_Operator>;
  createdAt?: InputMaybe<Performer_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Performer_Image_Filename_Operator>;
  filesize?: InputMaybe<Performer_Image_Filesize_Operator>;
  height?: InputMaybe<Performer_Image_Height_Operator>;
  id?: InputMaybe<Performer_Image_Id_Operator>;
  mimeType?: InputMaybe<Performer_Image_MimeType_Operator>;
  title?: InputMaybe<Performer_Image_Title_Operator>;
  updatedAt?: InputMaybe<Performer_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Performer_Image_Url_Operator>;
  width?: InputMaybe<Performer_Image_Width_Operator>;
};

export type Performer_Image_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Performer_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Performer_Image_Where_Or>>>;
  alt?: InputMaybe<Performer_Image_Alt_Operator>;
  createdAt?: InputMaybe<Performer_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Performer_Image_Filename_Operator>;
  filesize?: InputMaybe<Performer_Image_Filesize_Operator>;
  height?: InputMaybe<Performer_Image_Height_Operator>;
  id?: InputMaybe<Performer_Image_Id_Operator>;
  mimeType?: InputMaybe<Performer_Image_MimeType_Operator>;
  title?: InputMaybe<Performer_Image_Title_Operator>;
  updatedAt?: InputMaybe<Performer_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Performer_Image_Url_Operator>;
  width?: InputMaybe<Performer_Image_Width_Operator>;
};

export type Performer_Image_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Performer_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Performer_Image_Where_Or>>>;
  alt?: InputMaybe<Performer_Image_Alt_Operator>;
  createdAt?: InputMaybe<Performer_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Performer_Image_Filename_Operator>;
  filesize?: InputMaybe<Performer_Image_Filesize_Operator>;
  height?: InputMaybe<Performer_Image_Height_Operator>;
  id?: InputMaybe<Performer_Image_Id_Operator>;
  mimeType?: InputMaybe<Performer_Image_MimeType_Operator>;
  title?: InputMaybe<Performer_Image_Title_Operator>;
  updatedAt?: InputMaybe<Performer_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Performer_Image_Url_Operator>;
  width?: InputMaybe<Performer_Image_Width_Operator>;
};

export type Performer_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export enum Performer__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Performer__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Performer__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Performer__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Performer__Status_Input>>>;
  equals?: InputMaybe<Performer__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Performer__Status_Input>>>;
  not_equals?: InputMaybe<Performer__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Performer__Status_Input>>>;
};

export type Performer_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Performer_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Performer_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Performer_Image_Operator = {
  equals?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type Performer_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Performer_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Performer_Where = {
  AND?: InputMaybe<Array<InputMaybe<Performer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Performer_Where_Or>>>;
  _status?: InputMaybe<Performer__Status_Operator>;
  createdAt?: InputMaybe<Performer_CreatedAt_Operator>;
  description?: InputMaybe<Performer_Description_Operator>;
  id?: InputMaybe<Performer_Id_Operator>;
  image?: InputMaybe<Performer_Image_Operator>;
  title?: InputMaybe<Performer_Title_Operator>;
  updatedAt?: InputMaybe<Performer_UpdatedAt_Operator>;
};

export type Performer_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Performer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Performer_Where_Or>>>;
  _status?: InputMaybe<Performer__Status_Operator>;
  createdAt?: InputMaybe<Performer_CreatedAt_Operator>;
  description?: InputMaybe<Performer_Description_Operator>;
  id?: InputMaybe<Performer_Id_Operator>;
  image?: InputMaybe<Performer_Image_Operator>;
  title?: InputMaybe<Performer_Title_Operator>;
  updatedAt?: InputMaybe<Performer_UpdatedAt_Operator>;
};

export type Performer_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Performer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Performer_Where_Or>>>;
  _status?: InputMaybe<Performer__Status_Operator>;
  createdAt?: InputMaybe<Performer_CreatedAt_Operator>;
  description?: InputMaybe<Performer_Description_Operator>;
  id?: InputMaybe<Performer_Id_Operator>;
  image?: InputMaybe<Performer_Image_Operator>;
  title?: InputMaybe<Performer_Title_Operator>;
  updatedAt?: InputMaybe<Performer_UpdatedAt_Operator>;
};

export type Performers = {
  __typename?: 'Performers';
  docs?: Maybe<Array<Maybe<Performer>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PerformersCreateAccess = {
  __typename?: 'PerformersCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformersCreateDocAccess = {
  __typename?: 'PerformersCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformersDeleteAccess = {
  __typename?: 'PerformersDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformersDeleteDocAccess = {
  __typename?: 'PerformersDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformersDocAccessFields = {
  __typename?: 'PerformersDocAccessFields';
  _status?: Maybe<PerformersDocAccessFields__Status>;
  createdAt?: Maybe<PerformersDocAccessFields_CreatedAt>;
  description?: Maybe<PerformersDocAccessFields_Description>;
  image?: Maybe<PerformersDocAccessFields_Image>;
  title?: Maybe<PerformersDocAccessFields_Title>;
  updatedAt?: Maybe<PerformersDocAccessFields_UpdatedAt>;
};

export type PerformersDocAccessFields__Status = {
  __typename?: 'PerformersDocAccessFields__status';
  create?: Maybe<PerformersDocAccessFields__Status_Create>;
  delete?: Maybe<PerformersDocAccessFields__Status_Delete>;
  read?: Maybe<PerformersDocAccessFields__Status_Read>;
  update?: Maybe<PerformersDocAccessFields__Status_Update>;
};

export type PerformersDocAccessFields__Status_Create = {
  __typename?: 'PerformersDocAccessFields__status_Create';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields__Status_Delete = {
  __typename?: 'PerformersDocAccessFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields__Status_Read = {
  __typename?: 'PerformersDocAccessFields__status_Read';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields__Status_Update = {
  __typename?: 'PerformersDocAccessFields__status_Update';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_CreatedAt = {
  __typename?: 'PerformersDocAccessFields_createdAt';
  create?: Maybe<PerformersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PerformersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PerformersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PerformersDocAccessFields_CreatedAt_Update>;
};

export type PerformersDocAccessFields_CreatedAt_Create = {
  __typename?: 'PerformersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PerformersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_CreatedAt_Read = {
  __typename?: 'PerformersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_CreatedAt_Update = {
  __typename?: 'PerformersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_Description = {
  __typename?: 'PerformersDocAccessFields_description';
  create?: Maybe<PerformersDocAccessFields_Description_Create>;
  delete?: Maybe<PerformersDocAccessFields_Description_Delete>;
  read?: Maybe<PerformersDocAccessFields_Description_Read>;
  update?: Maybe<PerformersDocAccessFields_Description_Update>;
};

export type PerformersDocAccessFields_Description_Create = {
  __typename?: 'PerformersDocAccessFields_description_Create';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_Description_Delete = {
  __typename?: 'PerformersDocAccessFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_Description_Read = {
  __typename?: 'PerformersDocAccessFields_description_Read';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_Description_Update = {
  __typename?: 'PerformersDocAccessFields_description_Update';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_Image = {
  __typename?: 'PerformersDocAccessFields_image';
  create?: Maybe<PerformersDocAccessFields_Image_Create>;
  delete?: Maybe<PerformersDocAccessFields_Image_Delete>;
  read?: Maybe<PerformersDocAccessFields_Image_Read>;
  update?: Maybe<PerformersDocAccessFields_Image_Update>;
};

export type PerformersDocAccessFields_Image_Create = {
  __typename?: 'PerformersDocAccessFields_image_Create';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_Image_Delete = {
  __typename?: 'PerformersDocAccessFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_Image_Read = {
  __typename?: 'PerformersDocAccessFields_image_Read';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_Image_Update = {
  __typename?: 'PerformersDocAccessFields_image_Update';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_Title = {
  __typename?: 'PerformersDocAccessFields_title';
  create?: Maybe<PerformersDocAccessFields_Title_Create>;
  delete?: Maybe<PerformersDocAccessFields_Title_Delete>;
  read?: Maybe<PerformersDocAccessFields_Title_Read>;
  update?: Maybe<PerformersDocAccessFields_Title_Update>;
};

export type PerformersDocAccessFields_Title_Create = {
  __typename?: 'PerformersDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_Title_Delete = {
  __typename?: 'PerformersDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_Title_Read = {
  __typename?: 'PerformersDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_Title_Update = {
  __typename?: 'PerformersDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_UpdatedAt = {
  __typename?: 'PerformersDocAccessFields_updatedAt';
  create?: Maybe<PerformersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PerformersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PerformersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PerformersDocAccessFields_UpdatedAt_Update>;
};

export type PerformersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PerformersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PerformersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PerformersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PerformersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PerformersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PerformersFields = {
  __typename?: 'PerformersFields';
  _status?: Maybe<PerformersFields__Status>;
  createdAt?: Maybe<PerformersFields_CreatedAt>;
  description?: Maybe<PerformersFields_Description>;
  image?: Maybe<PerformersFields_Image>;
  title?: Maybe<PerformersFields_Title>;
  updatedAt?: Maybe<PerformersFields_UpdatedAt>;
};

export type PerformersFields__Status = {
  __typename?: 'PerformersFields__status';
  create?: Maybe<PerformersFields__Status_Create>;
  delete?: Maybe<PerformersFields__Status_Delete>;
  read?: Maybe<PerformersFields__Status_Read>;
  update?: Maybe<PerformersFields__Status_Update>;
};

export type PerformersFields__Status_Create = {
  __typename?: 'PerformersFields__status_Create';
  permission: Scalars['Boolean'];
};

export type PerformersFields__Status_Delete = {
  __typename?: 'PerformersFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type PerformersFields__Status_Read = {
  __typename?: 'PerformersFields__status_Read';
  permission: Scalars['Boolean'];
};

export type PerformersFields__Status_Update = {
  __typename?: 'PerformersFields__status_Update';
  permission: Scalars['Boolean'];
};

export type PerformersFields_CreatedAt = {
  __typename?: 'PerformersFields_createdAt';
  create?: Maybe<PerformersFields_CreatedAt_Create>;
  delete?: Maybe<PerformersFields_CreatedAt_Delete>;
  read?: Maybe<PerformersFields_CreatedAt_Read>;
  update?: Maybe<PerformersFields_CreatedAt_Update>;
};

export type PerformersFields_CreatedAt_Create = {
  __typename?: 'PerformersFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PerformersFields_CreatedAt_Delete = {
  __typename?: 'PerformersFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PerformersFields_CreatedAt_Read = {
  __typename?: 'PerformersFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PerformersFields_CreatedAt_Update = {
  __typename?: 'PerformersFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PerformersFields_Description = {
  __typename?: 'PerformersFields_description';
  create?: Maybe<PerformersFields_Description_Create>;
  delete?: Maybe<PerformersFields_Description_Delete>;
  read?: Maybe<PerformersFields_Description_Read>;
  update?: Maybe<PerformersFields_Description_Update>;
};

export type PerformersFields_Description_Create = {
  __typename?: 'PerformersFields_description_Create';
  permission: Scalars['Boolean'];
};

export type PerformersFields_Description_Delete = {
  __typename?: 'PerformersFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type PerformersFields_Description_Read = {
  __typename?: 'PerformersFields_description_Read';
  permission: Scalars['Boolean'];
};

export type PerformersFields_Description_Update = {
  __typename?: 'PerformersFields_description_Update';
  permission: Scalars['Boolean'];
};

export type PerformersFields_Image = {
  __typename?: 'PerformersFields_image';
  create?: Maybe<PerformersFields_Image_Create>;
  delete?: Maybe<PerformersFields_Image_Delete>;
  read?: Maybe<PerformersFields_Image_Read>;
  update?: Maybe<PerformersFields_Image_Update>;
};

export type PerformersFields_Image_Create = {
  __typename?: 'PerformersFields_image_Create';
  permission: Scalars['Boolean'];
};

export type PerformersFields_Image_Delete = {
  __typename?: 'PerformersFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type PerformersFields_Image_Read = {
  __typename?: 'PerformersFields_image_Read';
  permission: Scalars['Boolean'];
};

export type PerformersFields_Image_Update = {
  __typename?: 'PerformersFields_image_Update';
  permission: Scalars['Boolean'];
};

export type PerformersFields_Title = {
  __typename?: 'PerformersFields_title';
  create?: Maybe<PerformersFields_Title_Create>;
  delete?: Maybe<PerformersFields_Title_Delete>;
  read?: Maybe<PerformersFields_Title_Read>;
  update?: Maybe<PerformersFields_Title_Update>;
};

export type PerformersFields_Title_Create = {
  __typename?: 'PerformersFields_title_Create';
  permission: Scalars['Boolean'];
};

export type PerformersFields_Title_Delete = {
  __typename?: 'PerformersFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type PerformersFields_Title_Read = {
  __typename?: 'PerformersFields_title_Read';
  permission: Scalars['Boolean'];
};

export type PerformersFields_Title_Update = {
  __typename?: 'PerformersFields_title_Update';
  permission: Scalars['Boolean'];
};

export type PerformersFields_UpdatedAt = {
  __typename?: 'PerformersFields_updatedAt';
  create?: Maybe<PerformersFields_UpdatedAt_Create>;
  delete?: Maybe<PerformersFields_UpdatedAt_Delete>;
  read?: Maybe<PerformersFields_UpdatedAt_Read>;
  update?: Maybe<PerformersFields_UpdatedAt_Update>;
};

export type PerformersFields_UpdatedAt_Create = {
  __typename?: 'PerformersFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PerformersFields_UpdatedAt_Delete = {
  __typename?: 'PerformersFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PerformersFields_UpdatedAt_Read = {
  __typename?: 'PerformersFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PerformersFields_UpdatedAt_Update = {
  __typename?: 'PerformersFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PerformersReadAccess = {
  __typename?: 'PerformersReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformersReadDocAccess = {
  __typename?: 'PerformersReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformersReadVersionsAccess = {
  __typename?: 'PerformersReadVersionsAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformersReadVersionsDocAccess = {
  __typename?: 'PerformersReadVersionsDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformersUpdateAccess = {
  __typename?: 'PerformersUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PerformersUpdateDocAccess = {
  __typename?: 'PerformersUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Artist?: Maybe<Artist>;
  Artists?: Maybe<Artists>;
  Media?: Maybe<Media>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Performance?: Maybe<Performance>;
  Performances?: Maybe<Performances>;
  Performer?: Maybe<Performer>;
  Performers?: Maybe<Performers>;
  Setting?: Maybe<Setting>;
  Show?: Maybe<Show>;
  Shows?: Maybe<Shows>;
  Song?: Maybe<Song>;
  Songs?: Maybe<Songs>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  docAccessArtist?: Maybe<ArtistsDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessPerformance?: Maybe<PerformancesDocAccess>;
  docAccessPerformer?: Maybe<PerformersDocAccess>;
  docAccessSetting?: Maybe<SettingsDocAccess>;
  docAccessShow?: Maybe<ShowsDocAccess>;
  docAccessSong?: Maybe<SongsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']>;
  meUser?: Maybe<UsersMe>;
  versionArtist?: Maybe<ArtistVersion>;
  versionPerformance?: Maybe<PerformanceVersion>;
  versionPerformer?: Maybe<PerformerVersion>;
  versionSetting?: Maybe<SettingVersion>;
  versionShow?: Maybe<ShowVersion>;
  versionSong?: Maybe<SongVersion>;
  versionsArtists?: Maybe<VersionsArtists>;
  versionsPerformances?: Maybe<VersionsPerformances>;
  versionsPerformers?: Maybe<VersionsPerformers>;
  versionsSetting?: Maybe<VersionsSetting>;
  versionsShows?: Maybe<VersionsShows>;
  versionsSongs?: Maybe<VersionsSongs>;
};


export type QueryArtistArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryArtistsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Artist_Where>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryPerformanceArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryPerformancesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Performance_Where>;
};


export type QueryPerformerArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryPerformersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Performer_Where>;
};


export type QuerySettingArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryShowArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryShowsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Show_Where>;
};


export type QuerySongArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QuerySongsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Song_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessArtistArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPerformanceArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPerformerArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessShowArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessSongArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String'];
};


export type QueryVersionArtistArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryVersionPerformanceArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryVersionPerformerArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryVersionSettingArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryVersionShowArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryVersionSongArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryVersionsArtistsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<VersionsArtist_Where>;
};


export type QueryVersionsPerformancesArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<VersionsPerformance_Where>;
};


export type QueryVersionsPerformersArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<VersionsPerformer_Where>;
};


export type QueryVersionsSettingArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<VersionsSetting_Where>;
};


export type QueryVersionsShowsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<VersionsShow_Where>;
};


export type QueryVersionsSongsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<VersionsSong_Where>;
};

export type Setting = {
  __typename?: 'Setting';
  _status?: Maybe<Setting__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  now?: Maybe<Setting_Now_Relationship>;
  show?: Maybe<Setting_Show_Relationship>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SettingNowArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type SettingShowArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type SettingVersion = {
  __typename?: 'SettingVersion';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  latest?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<SettingVersion_Version>;
};

export type SettingVersion_Version = {
  __typename?: 'SettingVersion_Version';
  _status?: Maybe<SettingVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  now?: Maybe<SettingVersion_Version_Now_Relationship>;
  show?: Maybe<SettingVersion_Version_Show_Relationship>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SettingVersion_VersionNowArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type SettingVersion_VersionShowArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type SettingVersion_Version_Now = Performance | Song;

export enum SettingVersion_Version_Now_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export type SettingVersion_Version_Now_Relationship = {
  __typename?: 'SettingVersion_Version_Now_Relationship';
  relationTo?: Maybe<SettingVersion_Version_Now_RelationTo>;
  value?: Maybe<SettingVersion_Version_Now>;
};

export type SettingVersion_Version_Show = Show;

export enum SettingVersion_Version_Show_RelationTo {
  Shows = 'shows'
}

export type SettingVersion_Version_Show_Relationship = {
  __typename?: 'SettingVersion_Version_Show_Relationship';
  relationTo?: Maybe<SettingVersion_Version_Show_RelationTo>;
  value?: Maybe<SettingVersion_Version_Show>;
};

export enum SettingVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type Setting_Now = Performance | Song;

export type Setting_NowRelationshipInput = {
  relationTo?: InputMaybe<Setting_NowRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Setting_NowRelationshipInputRelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export enum Setting_Now_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export type Setting_Now_Relationship = {
  __typename?: 'Setting_Now_Relationship';
  relationTo?: Maybe<Setting_Now_RelationTo>;
  value?: Maybe<Setting_Now>;
};

export type Setting_Show = Show;

export type Setting_ShowRelationshipInput = {
  relationTo?: InputMaybe<Setting_ShowRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Setting_ShowRelationshipInputRelationTo {
  Shows = 'shows'
}

export enum Setting_Show_RelationTo {
  Shows = 'shows'
}

export type Setting_Show_Relationship = {
  __typename?: 'Setting_Show_Relationship';
  relationTo?: Maybe<Setting_Show_RelationTo>;
  value?: Maybe<Setting_Show>;
};

export enum Setting__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Setting__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type SettingsDocAccessFields = {
  __typename?: 'SettingsDocAccessFields';
  _status?: Maybe<SettingsDocAccessFields__Status>;
  createdAt?: Maybe<SettingsDocAccessFields_CreatedAt>;
  now?: Maybe<SettingsDocAccessFields_Now>;
  show?: Maybe<SettingsDocAccessFields_Show>;
  updatedAt?: Maybe<SettingsDocAccessFields_UpdatedAt>;
};

export type SettingsDocAccessFields__Status = {
  __typename?: 'SettingsDocAccessFields__status';
  create?: Maybe<SettingsDocAccessFields__Status_Create>;
  delete?: Maybe<SettingsDocAccessFields__Status_Delete>;
  read?: Maybe<SettingsDocAccessFields__Status_Read>;
  update?: Maybe<SettingsDocAccessFields__Status_Update>;
};

export type SettingsDocAccessFields__Status_Create = {
  __typename?: 'SettingsDocAccessFields__status_Create';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields__Status_Delete = {
  __typename?: 'SettingsDocAccessFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields__Status_Read = {
  __typename?: 'SettingsDocAccessFields__status_Read';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields__Status_Update = {
  __typename?: 'SettingsDocAccessFields__status_Update';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_CreatedAt = {
  __typename?: 'SettingsDocAccessFields_createdAt';
  create?: Maybe<SettingsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SettingsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SettingsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SettingsDocAccessFields_CreatedAt_Update>;
};

export type SettingsDocAccessFields_CreatedAt_Create = {
  __typename?: 'SettingsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'SettingsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_CreatedAt_Read = {
  __typename?: 'SettingsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_CreatedAt_Update = {
  __typename?: 'SettingsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_Now = {
  __typename?: 'SettingsDocAccessFields_now';
  create?: Maybe<SettingsDocAccessFields_Now_Create>;
  delete?: Maybe<SettingsDocAccessFields_Now_Delete>;
  read?: Maybe<SettingsDocAccessFields_Now_Read>;
  update?: Maybe<SettingsDocAccessFields_Now_Update>;
};

export type SettingsDocAccessFields_Now_Create = {
  __typename?: 'SettingsDocAccessFields_now_Create';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_Now_Delete = {
  __typename?: 'SettingsDocAccessFields_now_Delete';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_Now_Read = {
  __typename?: 'SettingsDocAccessFields_now_Read';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_Now_Update = {
  __typename?: 'SettingsDocAccessFields_now_Update';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_Show = {
  __typename?: 'SettingsDocAccessFields_show';
  create?: Maybe<SettingsDocAccessFields_Show_Create>;
  delete?: Maybe<SettingsDocAccessFields_Show_Delete>;
  read?: Maybe<SettingsDocAccessFields_Show_Read>;
  update?: Maybe<SettingsDocAccessFields_Show_Update>;
};

export type SettingsDocAccessFields_Show_Create = {
  __typename?: 'SettingsDocAccessFields_show_Create';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_Show_Delete = {
  __typename?: 'SettingsDocAccessFields_show_Delete';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_Show_Read = {
  __typename?: 'SettingsDocAccessFields_show_Read';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_Show_Update = {
  __typename?: 'SettingsDocAccessFields_show_Update';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_UpdatedAt = {
  __typename?: 'SettingsDocAccessFields_updatedAt';
  create?: Maybe<SettingsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SettingsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SettingsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SettingsDocAccessFields_UpdatedAt_Update>;
};

export type SettingsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'SettingsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'SettingsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'SettingsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type SettingsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'SettingsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type SettingsFields = {
  __typename?: 'SettingsFields';
  _status?: Maybe<SettingsFields__Status>;
  createdAt?: Maybe<SettingsFields_CreatedAt>;
  now?: Maybe<SettingsFields_Now>;
  show?: Maybe<SettingsFields_Show>;
  updatedAt?: Maybe<SettingsFields_UpdatedAt>;
};

export type SettingsFields__Status = {
  __typename?: 'SettingsFields__status';
  create?: Maybe<SettingsFields__Status_Create>;
  delete?: Maybe<SettingsFields__Status_Delete>;
  read?: Maybe<SettingsFields__Status_Read>;
  update?: Maybe<SettingsFields__Status_Update>;
};

export type SettingsFields__Status_Create = {
  __typename?: 'SettingsFields__status_Create';
  permission: Scalars['Boolean'];
};

export type SettingsFields__Status_Delete = {
  __typename?: 'SettingsFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type SettingsFields__Status_Read = {
  __typename?: 'SettingsFields__status_Read';
  permission: Scalars['Boolean'];
};

export type SettingsFields__Status_Update = {
  __typename?: 'SettingsFields__status_Update';
  permission: Scalars['Boolean'];
};

export type SettingsFields_CreatedAt = {
  __typename?: 'SettingsFields_createdAt';
  create?: Maybe<SettingsFields_CreatedAt_Create>;
  delete?: Maybe<SettingsFields_CreatedAt_Delete>;
  read?: Maybe<SettingsFields_CreatedAt_Read>;
  update?: Maybe<SettingsFields_CreatedAt_Update>;
};

export type SettingsFields_CreatedAt_Create = {
  __typename?: 'SettingsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type SettingsFields_CreatedAt_Delete = {
  __typename?: 'SettingsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type SettingsFields_CreatedAt_Read = {
  __typename?: 'SettingsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type SettingsFields_CreatedAt_Update = {
  __typename?: 'SettingsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type SettingsFields_Now = {
  __typename?: 'SettingsFields_now';
  create?: Maybe<SettingsFields_Now_Create>;
  delete?: Maybe<SettingsFields_Now_Delete>;
  read?: Maybe<SettingsFields_Now_Read>;
  update?: Maybe<SettingsFields_Now_Update>;
};

export type SettingsFields_Now_Create = {
  __typename?: 'SettingsFields_now_Create';
  permission: Scalars['Boolean'];
};

export type SettingsFields_Now_Delete = {
  __typename?: 'SettingsFields_now_Delete';
  permission: Scalars['Boolean'];
};

export type SettingsFields_Now_Read = {
  __typename?: 'SettingsFields_now_Read';
  permission: Scalars['Boolean'];
};

export type SettingsFields_Now_Update = {
  __typename?: 'SettingsFields_now_Update';
  permission: Scalars['Boolean'];
};

export type SettingsFields_Show = {
  __typename?: 'SettingsFields_show';
  create?: Maybe<SettingsFields_Show_Create>;
  delete?: Maybe<SettingsFields_Show_Delete>;
  read?: Maybe<SettingsFields_Show_Read>;
  update?: Maybe<SettingsFields_Show_Update>;
};

export type SettingsFields_Show_Create = {
  __typename?: 'SettingsFields_show_Create';
  permission: Scalars['Boolean'];
};

export type SettingsFields_Show_Delete = {
  __typename?: 'SettingsFields_show_Delete';
  permission: Scalars['Boolean'];
};

export type SettingsFields_Show_Read = {
  __typename?: 'SettingsFields_show_Read';
  permission: Scalars['Boolean'];
};

export type SettingsFields_Show_Update = {
  __typename?: 'SettingsFields_show_Update';
  permission: Scalars['Boolean'];
};

export type SettingsFields_UpdatedAt = {
  __typename?: 'SettingsFields_updatedAt';
  create?: Maybe<SettingsFields_UpdatedAt_Create>;
  delete?: Maybe<SettingsFields_UpdatedAt_Delete>;
  read?: Maybe<SettingsFields_UpdatedAt_Read>;
  update?: Maybe<SettingsFields_UpdatedAt_Update>;
};

export type SettingsFields_UpdatedAt_Create = {
  __typename?: 'SettingsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type SettingsFields_UpdatedAt_Delete = {
  __typename?: 'SettingsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type SettingsFields_UpdatedAt_Read = {
  __typename?: 'SettingsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type SettingsFields_UpdatedAt_Update = {
  __typename?: 'SettingsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type SettingsReadAccess = {
  __typename?: 'SettingsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SettingsReadDocAccess = {
  __typename?: 'SettingsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SettingsReadVersionsAccess = {
  __typename?: 'SettingsReadVersionsAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SettingsReadVersionsDocAccess = {
  __typename?: 'SettingsReadVersionsDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SettingsUpdateAccess = {
  __typename?: 'SettingsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SettingsUpdateDocAccess = {
  __typename?: 'SettingsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Show = {
  __typename?: 'Show';
  _status?: Maybe<Show__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  performers?: Maybe<Array<Show_Performers_Relationship>>;
  program?: Maybe<Array<Show_Program_Relationship>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ShowDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type ShowPerformersArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type ShowProgramArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type ShowUpdate_PerformersRelationshipInput = {
  relationTo?: InputMaybe<ShowUpdate_PerformersRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum ShowUpdate_PerformersRelationshipInputRelationTo {
  Performers = 'performers'
}

export type ShowUpdate_ProgramRelationshipInput = {
  relationTo?: InputMaybe<ShowUpdate_ProgramRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum ShowUpdate_ProgramRelationshipInputRelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export enum ShowUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type ShowVersion = {
  __typename?: 'ShowVersion';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  latest?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Show>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<ShowVersion_Version>;
};


export type ShowVersionParentArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type ShowVersion_Version = {
  __typename?: 'ShowVersion_Version';
  _status?: Maybe<ShowVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  performers?: Maybe<Array<ShowVersion_Version_Performers_Relationship>>;
  program?: Maybe<Array<ShowVersion_Version_Program_Relationship>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ShowVersion_VersionDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type ShowVersion_VersionPerformersArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type ShowVersion_VersionProgramArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type ShowVersion_Version_Performers = Performer;

export enum ShowVersion_Version_Performers_RelationTo {
  Performers = 'performers'
}

export type ShowVersion_Version_Performers_Relationship = {
  __typename?: 'ShowVersion_Version_Performers_Relationship';
  relationTo?: Maybe<ShowVersion_Version_Performers_RelationTo>;
  value?: Maybe<ShowVersion_Version_Performers>;
};

export type ShowVersion_Version_Program = Performance | Song;

export enum ShowVersion_Version_Program_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export type ShowVersion_Version_Program_Relationship = {
  __typename?: 'ShowVersion_Version_Program_Relationship';
  relationTo?: Maybe<ShowVersion_Version_Program_RelationTo>;
  value?: Maybe<ShowVersion_Version_Program>;
};

export enum ShowVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type Show_Performers = Performer;

export type Show_PerformersRelationshipInput = {
  relationTo?: InputMaybe<Show_PerformersRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Show_PerformersRelationshipInputRelationTo {
  Performers = 'performers'
}

export enum Show_Performers_RelationTo {
  Performers = 'performers'
}

export type Show_Performers_Relationship = {
  __typename?: 'Show_Performers_Relationship';
  relationTo?: Maybe<Show_Performers_RelationTo>;
  value?: Maybe<Show_Performers>;
};

export type Show_Program = Performance | Song;

export type Show_ProgramRelationshipInput = {
  relationTo?: InputMaybe<Show_ProgramRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Show_ProgramRelationshipInputRelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export enum Show_Program_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export type Show_Program_Relationship = {
  __typename?: 'Show_Program_Relationship';
  relationTo?: Maybe<Show_Program_RelationTo>;
  value?: Maybe<Show_Program>;
};

export enum Show__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Show__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Show__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Show__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Show__Status_Input>>>;
  equals?: InputMaybe<Show__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Show__Status_Input>>>;
  not_equals?: InputMaybe<Show__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Show__Status_Input>>>;
};

export type Show_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Show_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Show_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Show_Performers_Relation = {
  relationTo?: InputMaybe<Show_Performers_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Show_Performers_Relation_RelationTo {
  Performers = 'performers'
}

export type Show_Program_Relation = {
  relationTo?: InputMaybe<Show_Program_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Show_Program_Relation_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export type Show_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Show_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Show_Where = {
  AND?: InputMaybe<Array<InputMaybe<Show_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Show_Where_Or>>>;
  _status?: InputMaybe<Show__Status_Operator>;
  createdAt?: InputMaybe<Show_CreatedAt_Operator>;
  description?: InputMaybe<Show_Description_Operator>;
  id?: InputMaybe<Show_Id_Operator>;
  performers?: InputMaybe<Show_Performers_Relation>;
  program?: InputMaybe<Show_Program_Relation>;
  title?: InputMaybe<Show_Title_Operator>;
  updatedAt?: InputMaybe<Show_UpdatedAt_Operator>;
};

export type Show_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Show_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Show_Where_Or>>>;
  _status?: InputMaybe<Show__Status_Operator>;
  createdAt?: InputMaybe<Show_CreatedAt_Operator>;
  description?: InputMaybe<Show_Description_Operator>;
  id?: InputMaybe<Show_Id_Operator>;
  performers?: InputMaybe<Show_Performers_Relation>;
  program?: InputMaybe<Show_Program_Relation>;
  title?: InputMaybe<Show_Title_Operator>;
  updatedAt?: InputMaybe<Show_UpdatedAt_Operator>;
};

export type Show_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Show_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Show_Where_Or>>>;
  _status?: InputMaybe<Show__Status_Operator>;
  createdAt?: InputMaybe<Show_CreatedAt_Operator>;
  description?: InputMaybe<Show_Description_Operator>;
  id?: InputMaybe<Show_Id_Operator>;
  performers?: InputMaybe<Show_Performers_Relation>;
  program?: InputMaybe<Show_Program_Relation>;
  title?: InputMaybe<Show_Title_Operator>;
  updatedAt?: InputMaybe<Show_UpdatedAt_Operator>;
};

export type Shows = {
  __typename?: 'Shows';
  docs?: Maybe<Array<Maybe<Show>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type ShowsCreateAccess = {
  __typename?: 'ShowsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsCreateDocAccess = {
  __typename?: 'ShowsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsDeleteAccess = {
  __typename?: 'ShowsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsDeleteDocAccess = {
  __typename?: 'ShowsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsDocAccessFields = {
  __typename?: 'ShowsDocAccessFields';
  _status?: Maybe<ShowsDocAccessFields__Status>;
  createdAt?: Maybe<ShowsDocAccessFields_CreatedAt>;
  description?: Maybe<ShowsDocAccessFields_Description>;
  performers?: Maybe<ShowsDocAccessFields_Performers>;
  program?: Maybe<ShowsDocAccessFields_Program>;
  title?: Maybe<ShowsDocAccessFields_Title>;
  updatedAt?: Maybe<ShowsDocAccessFields_UpdatedAt>;
};

export type ShowsDocAccessFields__Status = {
  __typename?: 'ShowsDocAccessFields__status';
  create?: Maybe<ShowsDocAccessFields__Status_Create>;
  delete?: Maybe<ShowsDocAccessFields__Status_Delete>;
  read?: Maybe<ShowsDocAccessFields__Status_Read>;
  update?: Maybe<ShowsDocAccessFields__Status_Update>;
};

export type ShowsDocAccessFields__Status_Create = {
  __typename?: 'ShowsDocAccessFields__status_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields__Status_Delete = {
  __typename?: 'ShowsDocAccessFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields__Status_Read = {
  __typename?: 'ShowsDocAccessFields__status_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields__Status_Update = {
  __typename?: 'ShowsDocAccessFields__status_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_CreatedAt = {
  __typename?: 'ShowsDocAccessFields_createdAt';
  create?: Maybe<ShowsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ShowsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ShowsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ShowsDocAccessFields_CreatedAt_Update>;
};

export type ShowsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ShowsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ShowsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ShowsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ShowsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Description = {
  __typename?: 'ShowsDocAccessFields_description';
  create?: Maybe<ShowsDocAccessFields_Description_Create>;
  delete?: Maybe<ShowsDocAccessFields_Description_Delete>;
  read?: Maybe<ShowsDocAccessFields_Description_Read>;
  update?: Maybe<ShowsDocAccessFields_Description_Update>;
};

export type ShowsDocAccessFields_Description_Create = {
  __typename?: 'ShowsDocAccessFields_description_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Description_Delete = {
  __typename?: 'ShowsDocAccessFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Description_Read = {
  __typename?: 'ShowsDocAccessFields_description_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Description_Update = {
  __typename?: 'ShowsDocAccessFields_description_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Performers = {
  __typename?: 'ShowsDocAccessFields_performers';
  create?: Maybe<ShowsDocAccessFields_Performers_Create>;
  delete?: Maybe<ShowsDocAccessFields_Performers_Delete>;
  read?: Maybe<ShowsDocAccessFields_Performers_Read>;
  update?: Maybe<ShowsDocAccessFields_Performers_Update>;
};

export type ShowsDocAccessFields_Performers_Create = {
  __typename?: 'ShowsDocAccessFields_performers_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Performers_Delete = {
  __typename?: 'ShowsDocAccessFields_performers_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Performers_Read = {
  __typename?: 'ShowsDocAccessFields_performers_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Performers_Update = {
  __typename?: 'ShowsDocAccessFields_performers_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Program = {
  __typename?: 'ShowsDocAccessFields_program';
  create?: Maybe<ShowsDocAccessFields_Program_Create>;
  delete?: Maybe<ShowsDocAccessFields_Program_Delete>;
  read?: Maybe<ShowsDocAccessFields_Program_Read>;
  update?: Maybe<ShowsDocAccessFields_Program_Update>;
};

export type ShowsDocAccessFields_Program_Create = {
  __typename?: 'ShowsDocAccessFields_program_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Program_Delete = {
  __typename?: 'ShowsDocAccessFields_program_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Program_Read = {
  __typename?: 'ShowsDocAccessFields_program_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Program_Update = {
  __typename?: 'ShowsDocAccessFields_program_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Title = {
  __typename?: 'ShowsDocAccessFields_title';
  create?: Maybe<ShowsDocAccessFields_Title_Create>;
  delete?: Maybe<ShowsDocAccessFields_Title_Delete>;
  read?: Maybe<ShowsDocAccessFields_Title_Read>;
  update?: Maybe<ShowsDocAccessFields_Title_Update>;
};

export type ShowsDocAccessFields_Title_Create = {
  __typename?: 'ShowsDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Title_Delete = {
  __typename?: 'ShowsDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Title_Read = {
  __typename?: 'ShowsDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Title_Update = {
  __typename?: 'ShowsDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_UpdatedAt = {
  __typename?: 'ShowsDocAccessFields_updatedAt';
  create?: Maybe<ShowsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ShowsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ShowsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ShowsDocAccessFields_UpdatedAt_Update>;
};

export type ShowsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ShowsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ShowsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ShowsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ShowsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields = {
  __typename?: 'ShowsFields';
  _status?: Maybe<ShowsFields__Status>;
  createdAt?: Maybe<ShowsFields_CreatedAt>;
  description?: Maybe<ShowsFields_Description>;
  performers?: Maybe<ShowsFields_Performers>;
  program?: Maybe<ShowsFields_Program>;
  title?: Maybe<ShowsFields_Title>;
  updatedAt?: Maybe<ShowsFields_UpdatedAt>;
};

export type ShowsFields__Status = {
  __typename?: 'ShowsFields__status';
  create?: Maybe<ShowsFields__Status_Create>;
  delete?: Maybe<ShowsFields__Status_Delete>;
  read?: Maybe<ShowsFields__Status_Read>;
  update?: Maybe<ShowsFields__Status_Update>;
};

export type ShowsFields__Status_Create = {
  __typename?: 'ShowsFields__status_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields__Status_Delete = {
  __typename?: 'ShowsFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields__Status_Read = {
  __typename?: 'ShowsFields__status_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields__Status_Update = {
  __typename?: 'ShowsFields__status_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_CreatedAt = {
  __typename?: 'ShowsFields_createdAt';
  create?: Maybe<ShowsFields_CreatedAt_Create>;
  delete?: Maybe<ShowsFields_CreatedAt_Delete>;
  read?: Maybe<ShowsFields_CreatedAt_Read>;
  update?: Maybe<ShowsFields_CreatedAt_Update>;
};

export type ShowsFields_CreatedAt_Create = {
  __typename?: 'ShowsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_CreatedAt_Delete = {
  __typename?: 'ShowsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_CreatedAt_Read = {
  __typename?: 'ShowsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_CreatedAt_Update = {
  __typename?: 'ShowsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Description = {
  __typename?: 'ShowsFields_description';
  create?: Maybe<ShowsFields_Description_Create>;
  delete?: Maybe<ShowsFields_Description_Delete>;
  read?: Maybe<ShowsFields_Description_Read>;
  update?: Maybe<ShowsFields_Description_Update>;
};

export type ShowsFields_Description_Create = {
  __typename?: 'ShowsFields_description_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Description_Delete = {
  __typename?: 'ShowsFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Description_Read = {
  __typename?: 'ShowsFields_description_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Description_Update = {
  __typename?: 'ShowsFields_description_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Performers = {
  __typename?: 'ShowsFields_performers';
  create?: Maybe<ShowsFields_Performers_Create>;
  delete?: Maybe<ShowsFields_Performers_Delete>;
  read?: Maybe<ShowsFields_Performers_Read>;
  update?: Maybe<ShowsFields_Performers_Update>;
};

export type ShowsFields_Performers_Create = {
  __typename?: 'ShowsFields_performers_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Performers_Delete = {
  __typename?: 'ShowsFields_performers_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Performers_Read = {
  __typename?: 'ShowsFields_performers_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Performers_Update = {
  __typename?: 'ShowsFields_performers_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Program = {
  __typename?: 'ShowsFields_program';
  create?: Maybe<ShowsFields_Program_Create>;
  delete?: Maybe<ShowsFields_Program_Delete>;
  read?: Maybe<ShowsFields_Program_Read>;
  update?: Maybe<ShowsFields_Program_Update>;
};

export type ShowsFields_Program_Create = {
  __typename?: 'ShowsFields_program_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Program_Delete = {
  __typename?: 'ShowsFields_program_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Program_Read = {
  __typename?: 'ShowsFields_program_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Program_Update = {
  __typename?: 'ShowsFields_program_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Title = {
  __typename?: 'ShowsFields_title';
  create?: Maybe<ShowsFields_Title_Create>;
  delete?: Maybe<ShowsFields_Title_Delete>;
  read?: Maybe<ShowsFields_Title_Read>;
  update?: Maybe<ShowsFields_Title_Update>;
};

export type ShowsFields_Title_Create = {
  __typename?: 'ShowsFields_title_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Title_Delete = {
  __typename?: 'ShowsFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Title_Read = {
  __typename?: 'ShowsFields_title_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Title_Update = {
  __typename?: 'ShowsFields_title_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_UpdatedAt = {
  __typename?: 'ShowsFields_updatedAt';
  create?: Maybe<ShowsFields_UpdatedAt_Create>;
  delete?: Maybe<ShowsFields_UpdatedAt_Delete>;
  read?: Maybe<ShowsFields_UpdatedAt_Read>;
  update?: Maybe<ShowsFields_UpdatedAt_Update>;
};

export type ShowsFields_UpdatedAt_Create = {
  __typename?: 'ShowsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_UpdatedAt_Delete = {
  __typename?: 'ShowsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_UpdatedAt_Read = {
  __typename?: 'ShowsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_UpdatedAt_Update = {
  __typename?: 'ShowsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ShowsReadAccess = {
  __typename?: 'ShowsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsReadDocAccess = {
  __typename?: 'ShowsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsReadVersionsAccess = {
  __typename?: 'ShowsReadVersionsAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsReadVersionsDocAccess = {
  __typename?: 'ShowsReadVersionsDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsUpdateAccess = {
  __typename?: 'ShowsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsUpdateDocAccess = {
  __typename?: 'ShowsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Song = {
  __typename?: 'Song';
  _status?: Maybe<Song__Status>;
  artists?: Maybe<Array<Song_Artists_Relationship>>;
  country?: Maybe<Song_Country>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  lyrics?: Maybe<Scalars['JSON']>;
  lyricsAuthors?: Maybe<Array<Song_LyricsAuthors_Relationship>>;
  musicAuthors?: Maybe<Array<Song_MusicAuthors_Relationship>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SongArtistsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type SongDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type SongLyricsArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type SongLyricsAuthorsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type SongMusicAuthorsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type SongUpdate_ArtistsRelationshipInput = {
  relationTo?: InputMaybe<SongUpdate_ArtistsRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum SongUpdate_ArtistsRelationshipInputRelationTo {
  Artists = 'artists'
}

export type SongUpdate_LyricsAuthorsRelationshipInput = {
  relationTo?: InputMaybe<SongUpdate_LyricsAuthorsRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum SongUpdate_LyricsAuthorsRelationshipInputRelationTo {
  Artists = 'artists'
}

export type SongUpdate_MusicAuthorsRelationshipInput = {
  relationTo?: InputMaybe<SongUpdate_MusicAuthorsRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum SongUpdate_MusicAuthorsRelationshipInputRelationTo {
  Artists = 'artists'
}

export enum SongUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export enum SongUpdate_Country_MutationInput {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  An = 'AN',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type SongVersion = {
  __typename?: 'SongVersion';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  latest?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Song>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<SongVersion_Version>;
};


export type SongVersionParentArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type SongVersion_Version = {
  __typename?: 'SongVersion_Version';
  _status?: Maybe<SongVersion_Version__Status>;
  artists?: Maybe<Array<SongVersion_Version_Artists_Relationship>>;
  country?: Maybe<SongVersion_Version_Country>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  lyrics?: Maybe<Scalars['JSON']>;
  lyricsAuthors?: Maybe<Array<SongVersion_Version_LyricsAuthors_Relationship>>;
  musicAuthors?: Maybe<Array<SongVersion_Version_MusicAuthors_Relationship>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SongVersion_VersionArtistsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type SongVersion_VersionDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type SongVersion_VersionLyricsArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type SongVersion_VersionLyricsAuthorsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type SongVersion_VersionMusicAuthorsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type SongVersion_Version_Artists = Artist;

export enum SongVersion_Version_Artists_RelationTo {
  Artists = 'artists'
}

export type SongVersion_Version_Artists_Relationship = {
  __typename?: 'SongVersion_Version_Artists_Relationship';
  relationTo?: Maybe<SongVersion_Version_Artists_RelationTo>;
  value?: Maybe<SongVersion_Version_Artists>;
};

export type SongVersion_Version_LyricsAuthors = Artist;

export enum SongVersion_Version_LyricsAuthors_RelationTo {
  Artists = 'artists'
}

export type SongVersion_Version_LyricsAuthors_Relationship = {
  __typename?: 'SongVersion_Version_LyricsAuthors_Relationship';
  relationTo?: Maybe<SongVersion_Version_LyricsAuthors_RelationTo>;
  value?: Maybe<SongVersion_Version_LyricsAuthors>;
};

export type SongVersion_Version_MusicAuthors = Artist;

export enum SongVersion_Version_MusicAuthors_RelationTo {
  Artists = 'artists'
}

export type SongVersion_Version_MusicAuthors_Relationship = {
  __typename?: 'SongVersion_Version_MusicAuthors_Relationship';
  relationTo?: Maybe<SongVersion_Version_MusicAuthors_RelationTo>;
  value?: Maybe<SongVersion_Version_MusicAuthors>;
};

export enum SongVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum SongVersion_Version_Country {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  An = 'AN',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type Song_Artists = Artist;

export type Song_ArtistsRelationshipInput = {
  relationTo?: InputMaybe<Song_ArtistsRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Song_ArtistsRelationshipInputRelationTo {
  Artists = 'artists'
}

export enum Song_Artists_RelationTo {
  Artists = 'artists'
}

export type Song_Artists_Relationship = {
  __typename?: 'Song_Artists_Relationship';
  relationTo?: Maybe<Song_Artists_RelationTo>;
  value?: Maybe<Song_Artists>;
};

export type Song_LyricsAuthors = Artist;

export type Song_LyricsAuthorsRelationshipInput = {
  relationTo?: InputMaybe<Song_LyricsAuthorsRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Song_LyricsAuthorsRelationshipInputRelationTo {
  Artists = 'artists'
}

export enum Song_LyricsAuthors_RelationTo {
  Artists = 'artists'
}

export type Song_LyricsAuthors_Relationship = {
  __typename?: 'Song_LyricsAuthors_Relationship';
  relationTo?: Maybe<Song_LyricsAuthors_RelationTo>;
  value?: Maybe<Song_LyricsAuthors>;
};

export type Song_MusicAuthors = Artist;

export type Song_MusicAuthorsRelationshipInput = {
  relationTo?: InputMaybe<Song_MusicAuthorsRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Song_MusicAuthorsRelationshipInputRelationTo {
  Artists = 'artists'
}

export enum Song_MusicAuthors_RelationTo {
  Artists = 'artists'
}

export type Song_MusicAuthors_Relationship = {
  __typename?: 'Song_MusicAuthors_Relationship';
  relationTo?: Maybe<Song_MusicAuthors_RelationTo>;
  value?: Maybe<Song_MusicAuthors>;
};

export enum Song__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Song__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Song__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Song__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Song__Status_Input>>>;
  equals?: InputMaybe<Song__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Song__Status_Input>>>;
  not_equals?: InputMaybe<Song__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Song__Status_Input>>>;
};

export type Song_Artists_Relation = {
  relationTo?: InputMaybe<Song_Artists_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Song_Artists_Relation_RelationTo {
  Artists = 'artists'
}

export enum Song_Country {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  An = 'AN',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export enum Song_Country_Input {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  An = 'AN',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export enum Song_Country_MutationInput {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  An = 'AN',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type Song_Country_Operator = {
  all?: InputMaybe<Array<InputMaybe<Song_Country_Input>>>;
  equals?: InputMaybe<Song_Country_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Song_Country_Input>>>;
  not_equals?: InputMaybe<Song_Country_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Song_Country_Input>>>;
};

export type Song_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Song_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Song_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Song_LyricsAuthors_Relation = {
  relationTo?: InputMaybe<Song_LyricsAuthors_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Song_LyricsAuthors_Relation_RelationTo {
  Artists = 'artists'
}

export type Song_Lyrics_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Song_MusicAuthors_Relation = {
  relationTo?: InputMaybe<Song_MusicAuthors_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum Song_MusicAuthors_Relation_RelationTo {
  Artists = 'artists'
}

export type Song_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Song_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Song_Where = {
  AND?: InputMaybe<Array<InputMaybe<Song_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Song_Where_Or>>>;
  _status?: InputMaybe<Song__Status_Operator>;
  artists?: InputMaybe<Song_Artists_Relation>;
  country?: InputMaybe<Song_Country_Operator>;
  createdAt?: InputMaybe<Song_CreatedAt_Operator>;
  description?: InputMaybe<Song_Description_Operator>;
  id?: InputMaybe<Song_Id_Operator>;
  lyrics?: InputMaybe<Song_Lyrics_Operator>;
  lyricsAuthors?: InputMaybe<Song_LyricsAuthors_Relation>;
  musicAuthors?: InputMaybe<Song_MusicAuthors_Relation>;
  title?: InputMaybe<Song_Title_Operator>;
  updatedAt?: InputMaybe<Song_UpdatedAt_Operator>;
};

export type Song_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Song_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Song_Where_Or>>>;
  _status?: InputMaybe<Song__Status_Operator>;
  artists?: InputMaybe<Song_Artists_Relation>;
  country?: InputMaybe<Song_Country_Operator>;
  createdAt?: InputMaybe<Song_CreatedAt_Operator>;
  description?: InputMaybe<Song_Description_Operator>;
  id?: InputMaybe<Song_Id_Operator>;
  lyrics?: InputMaybe<Song_Lyrics_Operator>;
  lyricsAuthors?: InputMaybe<Song_LyricsAuthors_Relation>;
  musicAuthors?: InputMaybe<Song_MusicAuthors_Relation>;
  title?: InputMaybe<Song_Title_Operator>;
  updatedAt?: InputMaybe<Song_UpdatedAt_Operator>;
};

export type Song_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Song_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Song_Where_Or>>>;
  _status?: InputMaybe<Song__Status_Operator>;
  artists?: InputMaybe<Song_Artists_Relation>;
  country?: InputMaybe<Song_Country_Operator>;
  createdAt?: InputMaybe<Song_CreatedAt_Operator>;
  description?: InputMaybe<Song_Description_Operator>;
  id?: InputMaybe<Song_Id_Operator>;
  lyrics?: InputMaybe<Song_Lyrics_Operator>;
  lyricsAuthors?: InputMaybe<Song_LyricsAuthors_Relation>;
  musicAuthors?: InputMaybe<Song_MusicAuthors_Relation>;
  title?: InputMaybe<Song_Title_Operator>;
  updatedAt?: InputMaybe<Song_UpdatedAt_Operator>;
};

export type Songs = {
  __typename?: 'Songs';
  docs?: Maybe<Array<Maybe<Song>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type SongsCreateAccess = {
  __typename?: 'SongsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SongsCreateDocAccess = {
  __typename?: 'SongsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SongsDeleteAccess = {
  __typename?: 'SongsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SongsDeleteDocAccess = {
  __typename?: 'SongsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SongsDocAccessFields = {
  __typename?: 'SongsDocAccessFields';
  _status?: Maybe<SongsDocAccessFields__Status>;
  artists?: Maybe<SongsDocAccessFields_Artists>;
  country?: Maybe<SongsDocAccessFields_Country>;
  createdAt?: Maybe<SongsDocAccessFields_CreatedAt>;
  description?: Maybe<SongsDocAccessFields_Description>;
  lyrics?: Maybe<SongsDocAccessFields_Lyrics>;
  lyricsAuthors?: Maybe<SongsDocAccessFields_LyricsAuthors>;
  musicAuthors?: Maybe<SongsDocAccessFields_MusicAuthors>;
  title?: Maybe<SongsDocAccessFields_Title>;
  updatedAt?: Maybe<SongsDocAccessFields_UpdatedAt>;
};

export type SongsDocAccessFields__Status = {
  __typename?: 'SongsDocAccessFields__status';
  create?: Maybe<SongsDocAccessFields__Status_Create>;
  delete?: Maybe<SongsDocAccessFields__Status_Delete>;
  read?: Maybe<SongsDocAccessFields__Status_Read>;
  update?: Maybe<SongsDocAccessFields__Status_Update>;
};

export type SongsDocAccessFields__Status_Create = {
  __typename?: 'SongsDocAccessFields__status_Create';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields__Status_Delete = {
  __typename?: 'SongsDocAccessFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields__Status_Read = {
  __typename?: 'SongsDocAccessFields__status_Read';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields__Status_Update = {
  __typename?: 'SongsDocAccessFields__status_Update';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Artists = {
  __typename?: 'SongsDocAccessFields_artists';
  create?: Maybe<SongsDocAccessFields_Artists_Create>;
  delete?: Maybe<SongsDocAccessFields_Artists_Delete>;
  read?: Maybe<SongsDocAccessFields_Artists_Read>;
  update?: Maybe<SongsDocAccessFields_Artists_Update>;
};

export type SongsDocAccessFields_Artists_Create = {
  __typename?: 'SongsDocAccessFields_artists_Create';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Artists_Delete = {
  __typename?: 'SongsDocAccessFields_artists_Delete';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Artists_Read = {
  __typename?: 'SongsDocAccessFields_artists_Read';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Artists_Update = {
  __typename?: 'SongsDocAccessFields_artists_Update';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Country = {
  __typename?: 'SongsDocAccessFields_country';
  create?: Maybe<SongsDocAccessFields_Country_Create>;
  delete?: Maybe<SongsDocAccessFields_Country_Delete>;
  read?: Maybe<SongsDocAccessFields_Country_Read>;
  update?: Maybe<SongsDocAccessFields_Country_Update>;
};

export type SongsDocAccessFields_Country_Create = {
  __typename?: 'SongsDocAccessFields_country_Create';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Country_Delete = {
  __typename?: 'SongsDocAccessFields_country_Delete';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Country_Read = {
  __typename?: 'SongsDocAccessFields_country_Read';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Country_Update = {
  __typename?: 'SongsDocAccessFields_country_Update';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_CreatedAt = {
  __typename?: 'SongsDocAccessFields_createdAt';
  create?: Maybe<SongsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SongsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SongsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SongsDocAccessFields_CreatedAt_Update>;
};

export type SongsDocAccessFields_CreatedAt_Create = {
  __typename?: 'SongsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'SongsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_CreatedAt_Read = {
  __typename?: 'SongsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_CreatedAt_Update = {
  __typename?: 'SongsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Description = {
  __typename?: 'SongsDocAccessFields_description';
  create?: Maybe<SongsDocAccessFields_Description_Create>;
  delete?: Maybe<SongsDocAccessFields_Description_Delete>;
  read?: Maybe<SongsDocAccessFields_Description_Read>;
  update?: Maybe<SongsDocAccessFields_Description_Update>;
};

export type SongsDocAccessFields_Description_Create = {
  __typename?: 'SongsDocAccessFields_description_Create';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Description_Delete = {
  __typename?: 'SongsDocAccessFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Description_Read = {
  __typename?: 'SongsDocAccessFields_description_Read';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Description_Update = {
  __typename?: 'SongsDocAccessFields_description_Update';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Lyrics = {
  __typename?: 'SongsDocAccessFields_lyrics';
  create?: Maybe<SongsDocAccessFields_Lyrics_Create>;
  delete?: Maybe<SongsDocAccessFields_Lyrics_Delete>;
  read?: Maybe<SongsDocAccessFields_Lyrics_Read>;
  update?: Maybe<SongsDocAccessFields_Lyrics_Update>;
};

export type SongsDocAccessFields_LyricsAuthors = {
  __typename?: 'SongsDocAccessFields_lyricsAuthors';
  create?: Maybe<SongsDocAccessFields_LyricsAuthors_Create>;
  delete?: Maybe<SongsDocAccessFields_LyricsAuthors_Delete>;
  read?: Maybe<SongsDocAccessFields_LyricsAuthors_Read>;
  update?: Maybe<SongsDocAccessFields_LyricsAuthors_Update>;
};

export type SongsDocAccessFields_LyricsAuthors_Create = {
  __typename?: 'SongsDocAccessFields_lyricsAuthors_Create';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_LyricsAuthors_Delete = {
  __typename?: 'SongsDocAccessFields_lyricsAuthors_Delete';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_LyricsAuthors_Read = {
  __typename?: 'SongsDocAccessFields_lyricsAuthors_Read';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_LyricsAuthors_Update = {
  __typename?: 'SongsDocAccessFields_lyricsAuthors_Update';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Lyrics_Create = {
  __typename?: 'SongsDocAccessFields_lyrics_Create';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Lyrics_Delete = {
  __typename?: 'SongsDocAccessFields_lyrics_Delete';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Lyrics_Read = {
  __typename?: 'SongsDocAccessFields_lyrics_Read';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Lyrics_Update = {
  __typename?: 'SongsDocAccessFields_lyrics_Update';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_MusicAuthors = {
  __typename?: 'SongsDocAccessFields_musicAuthors';
  create?: Maybe<SongsDocAccessFields_MusicAuthors_Create>;
  delete?: Maybe<SongsDocAccessFields_MusicAuthors_Delete>;
  read?: Maybe<SongsDocAccessFields_MusicAuthors_Read>;
  update?: Maybe<SongsDocAccessFields_MusicAuthors_Update>;
};

export type SongsDocAccessFields_MusicAuthors_Create = {
  __typename?: 'SongsDocAccessFields_musicAuthors_Create';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_MusicAuthors_Delete = {
  __typename?: 'SongsDocAccessFields_musicAuthors_Delete';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_MusicAuthors_Read = {
  __typename?: 'SongsDocAccessFields_musicAuthors_Read';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_MusicAuthors_Update = {
  __typename?: 'SongsDocAccessFields_musicAuthors_Update';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Title = {
  __typename?: 'SongsDocAccessFields_title';
  create?: Maybe<SongsDocAccessFields_Title_Create>;
  delete?: Maybe<SongsDocAccessFields_Title_Delete>;
  read?: Maybe<SongsDocAccessFields_Title_Read>;
  update?: Maybe<SongsDocAccessFields_Title_Update>;
};

export type SongsDocAccessFields_Title_Create = {
  __typename?: 'SongsDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Title_Delete = {
  __typename?: 'SongsDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Title_Read = {
  __typename?: 'SongsDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_Title_Update = {
  __typename?: 'SongsDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_UpdatedAt = {
  __typename?: 'SongsDocAccessFields_updatedAt';
  create?: Maybe<SongsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SongsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SongsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SongsDocAccessFields_UpdatedAt_Update>;
};

export type SongsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'SongsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'SongsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'SongsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type SongsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'SongsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type SongsFields = {
  __typename?: 'SongsFields';
  _status?: Maybe<SongsFields__Status>;
  artists?: Maybe<SongsFields_Artists>;
  country?: Maybe<SongsFields_Country>;
  createdAt?: Maybe<SongsFields_CreatedAt>;
  description?: Maybe<SongsFields_Description>;
  lyrics?: Maybe<SongsFields_Lyrics>;
  lyricsAuthors?: Maybe<SongsFields_LyricsAuthors>;
  musicAuthors?: Maybe<SongsFields_MusicAuthors>;
  title?: Maybe<SongsFields_Title>;
  updatedAt?: Maybe<SongsFields_UpdatedAt>;
};

export type SongsFields__Status = {
  __typename?: 'SongsFields__status';
  create?: Maybe<SongsFields__Status_Create>;
  delete?: Maybe<SongsFields__Status_Delete>;
  read?: Maybe<SongsFields__Status_Read>;
  update?: Maybe<SongsFields__Status_Update>;
};

export type SongsFields__Status_Create = {
  __typename?: 'SongsFields__status_Create';
  permission: Scalars['Boolean'];
};

export type SongsFields__Status_Delete = {
  __typename?: 'SongsFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type SongsFields__Status_Read = {
  __typename?: 'SongsFields__status_Read';
  permission: Scalars['Boolean'];
};

export type SongsFields__Status_Update = {
  __typename?: 'SongsFields__status_Update';
  permission: Scalars['Boolean'];
};

export type SongsFields_Artists = {
  __typename?: 'SongsFields_artists';
  create?: Maybe<SongsFields_Artists_Create>;
  delete?: Maybe<SongsFields_Artists_Delete>;
  read?: Maybe<SongsFields_Artists_Read>;
  update?: Maybe<SongsFields_Artists_Update>;
};

export type SongsFields_Artists_Create = {
  __typename?: 'SongsFields_artists_Create';
  permission: Scalars['Boolean'];
};

export type SongsFields_Artists_Delete = {
  __typename?: 'SongsFields_artists_Delete';
  permission: Scalars['Boolean'];
};

export type SongsFields_Artists_Read = {
  __typename?: 'SongsFields_artists_Read';
  permission: Scalars['Boolean'];
};

export type SongsFields_Artists_Update = {
  __typename?: 'SongsFields_artists_Update';
  permission: Scalars['Boolean'];
};

export type SongsFields_Country = {
  __typename?: 'SongsFields_country';
  create?: Maybe<SongsFields_Country_Create>;
  delete?: Maybe<SongsFields_Country_Delete>;
  read?: Maybe<SongsFields_Country_Read>;
  update?: Maybe<SongsFields_Country_Update>;
};

export type SongsFields_Country_Create = {
  __typename?: 'SongsFields_country_Create';
  permission: Scalars['Boolean'];
};

export type SongsFields_Country_Delete = {
  __typename?: 'SongsFields_country_Delete';
  permission: Scalars['Boolean'];
};

export type SongsFields_Country_Read = {
  __typename?: 'SongsFields_country_Read';
  permission: Scalars['Boolean'];
};

export type SongsFields_Country_Update = {
  __typename?: 'SongsFields_country_Update';
  permission: Scalars['Boolean'];
};

export type SongsFields_CreatedAt = {
  __typename?: 'SongsFields_createdAt';
  create?: Maybe<SongsFields_CreatedAt_Create>;
  delete?: Maybe<SongsFields_CreatedAt_Delete>;
  read?: Maybe<SongsFields_CreatedAt_Read>;
  update?: Maybe<SongsFields_CreatedAt_Update>;
};

export type SongsFields_CreatedAt_Create = {
  __typename?: 'SongsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type SongsFields_CreatedAt_Delete = {
  __typename?: 'SongsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type SongsFields_CreatedAt_Read = {
  __typename?: 'SongsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type SongsFields_CreatedAt_Update = {
  __typename?: 'SongsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type SongsFields_Description = {
  __typename?: 'SongsFields_description';
  create?: Maybe<SongsFields_Description_Create>;
  delete?: Maybe<SongsFields_Description_Delete>;
  read?: Maybe<SongsFields_Description_Read>;
  update?: Maybe<SongsFields_Description_Update>;
};

export type SongsFields_Description_Create = {
  __typename?: 'SongsFields_description_Create';
  permission: Scalars['Boolean'];
};

export type SongsFields_Description_Delete = {
  __typename?: 'SongsFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type SongsFields_Description_Read = {
  __typename?: 'SongsFields_description_Read';
  permission: Scalars['Boolean'];
};

export type SongsFields_Description_Update = {
  __typename?: 'SongsFields_description_Update';
  permission: Scalars['Boolean'];
};

export type SongsFields_Lyrics = {
  __typename?: 'SongsFields_lyrics';
  create?: Maybe<SongsFields_Lyrics_Create>;
  delete?: Maybe<SongsFields_Lyrics_Delete>;
  read?: Maybe<SongsFields_Lyrics_Read>;
  update?: Maybe<SongsFields_Lyrics_Update>;
};

export type SongsFields_LyricsAuthors = {
  __typename?: 'SongsFields_lyricsAuthors';
  create?: Maybe<SongsFields_LyricsAuthors_Create>;
  delete?: Maybe<SongsFields_LyricsAuthors_Delete>;
  read?: Maybe<SongsFields_LyricsAuthors_Read>;
  update?: Maybe<SongsFields_LyricsAuthors_Update>;
};

export type SongsFields_LyricsAuthors_Create = {
  __typename?: 'SongsFields_lyricsAuthors_Create';
  permission: Scalars['Boolean'];
};

export type SongsFields_LyricsAuthors_Delete = {
  __typename?: 'SongsFields_lyricsAuthors_Delete';
  permission: Scalars['Boolean'];
};

export type SongsFields_LyricsAuthors_Read = {
  __typename?: 'SongsFields_lyricsAuthors_Read';
  permission: Scalars['Boolean'];
};

export type SongsFields_LyricsAuthors_Update = {
  __typename?: 'SongsFields_lyricsAuthors_Update';
  permission: Scalars['Boolean'];
};

export type SongsFields_Lyrics_Create = {
  __typename?: 'SongsFields_lyrics_Create';
  permission: Scalars['Boolean'];
};

export type SongsFields_Lyrics_Delete = {
  __typename?: 'SongsFields_lyrics_Delete';
  permission: Scalars['Boolean'];
};

export type SongsFields_Lyrics_Read = {
  __typename?: 'SongsFields_lyrics_Read';
  permission: Scalars['Boolean'];
};

export type SongsFields_Lyrics_Update = {
  __typename?: 'SongsFields_lyrics_Update';
  permission: Scalars['Boolean'];
};

export type SongsFields_MusicAuthors = {
  __typename?: 'SongsFields_musicAuthors';
  create?: Maybe<SongsFields_MusicAuthors_Create>;
  delete?: Maybe<SongsFields_MusicAuthors_Delete>;
  read?: Maybe<SongsFields_MusicAuthors_Read>;
  update?: Maybe<SongsFields_MusicAuthors_Update>;
};

export type SongsFields_MusicAuthors_Create = {
  __typename?: 'SongsFields_musicAuthors_Create';
  permission: Scalars['Boolean'];
};

export type SongsFields_MusicAuthors_Delete = {
  __typename?: 'SongsFields_musicAuthors_Delete';
  permission: Scalars['Boolean'];
};

export type SongsFields_MusicAuthors_Read = {
  __typename?: 'SongsFields_musicAuthors_Read';
  permission: Scalars['Boolean'];
};

export type SongsFields_MusicAuthors_Update = {
  __typename?: 'SongsFields_musicAuthors_Update';
  permission: Scalars['Boolean'];
};

export type SongsFields_Title = {
  __typename?: 'SongsFields_title';
  create?: Maybe<SongsFields_Title_Create>;
  delete?: Maybe<SongsFields_Title_Delete>;
  read?: Maybe<SongsFields_Title_Read>;
  update?: Maybe<SongsFields_Title_Update>;
};

export type SongsFields_Title_Create = {
  __typename?: 'SongsFields_title_Create';
  permission: Scalars['Boolean'];
};

export type SongsFields_Title_Delete = {
  __typename?: 'SongsFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type SongsFields_Title_Read = {
  __typename?: 'SongsFields_title_Read';
  permission: Scalars['Boolean'];
};

export type SongsFields_Title_Update = {
  __typename?: 'SongsFields_title_Update';
  permission: Scalars['Boolean'];
};

export type SongsFields_UpdatedAt = {
  __typename?: 'SongsFields_updatedAt';
  create?: Maybe<SongsFields_UpdatedAt_Create>;
  delete?: Maybe<SongsFields_UpdatedAt_Delete>;
  read?: Maybe<SongsFields_UpdatedAt_Read>;
  update?: Maybe<SongsFields_UpdatedAt_Update>;
};

export type SongsFields_UpdatedAt_Create = {
  __typename?: 'SongsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type SongsFields_UpdatedAt_Delete = {
  __typename?: 'SongsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type SongsFields_UpdatedAt_Read = {
  __typename?: 'SongsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type SongsFields_UpdatedAt_Update = {
  __typename?: 'SongsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type SongsReadAccess = {
  __typename?: 'SongsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SongsReadDocAccess = {
  __typename?: 'SongsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SongsReadVersionsAccess = {
  __typename?: 'SongsReadVersionsAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SongsReadVersionsDocAccess = {
  __typename?: 'SongsReadVersionsDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SongsUpdateAccess = {
  __typename?: 'SongsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type SongsUpdateDocAccess = {
  __typename?: 'SongsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lockUntil?: Maybe<Scalars['DateTime']>;
  loginAttempts?: Maybe<Scalars['Float']>;
  password: Scalars['String'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']>;
  equals?: InputMaybe<Scalars['EmailAddress']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  like?: InputMaybe<Scalars['EmailAddress']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  password?: Maybe<UsersDocAccessFields_Password>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  password?: Maybe<UsersFields_Password>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type ArtistsAccess = {
  __typename?: 'artistsAccess';
  create?: Maybe<ArtistsCreateAccess>;
  delete?: Maybe<ArtistsDeleteAccess>;
  fields?: Maybe<ArtistsFields>;
  read?: Maybe<ArtistsReadAccess>;
  readVersions?: Maybe<ArtistsReadVersionsAccess>;
  update?: Maybe<ArtistsUpdateAccess>;
};

export type ArtistsDocAccess = {
  __typename?: 'artistsDocAccess';
  create?: Maybe<ArtistsCreateDocAccess>;
  delete?: Maybe<ArtistsDeleteDocAccess>;
  fields?: Maybe<ArtistsDocAccessFields>;
  read?: Maybe<ArtistsReadDocAccess>;
  readVersions?: Maybe<ArtistsReadVersionsDocAccess>;
  update?: Maybe<ArtistsUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationArtistInput = {
  _status?: InputMaybe<Artist__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MutationArtistUpdateInput = {
  _status?: InputMaybe<ArtistUpdate__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MutationMediaInput = {
  alt?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']>;
};

export type MutationPerformanceInput = {
  _status?: InputMaybe<Performance__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationPerformanceUpdateInput = {
  _status?: InputMaybe<PerformanceUpdate__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationPerformerInput = {
  _status?: InputMaybe<Performer__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  image: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationPerformerUpdateInput = {
  _status?: InputMaybe<PerformerUpdate__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationSettingInput = {
  _status?: InputMaybe<Setting__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  now?: InputMaybe<Setting_NowRelationshipInput>;
  show?: InputMaybe<Setting_ShowRelationshipInput>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationShowInput = {
  _status?: InputMaybe<Show__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  performers?: InputMaybe<Array<InputMaybe<Show_PerformersRelationshipInput>>>;
  program?: InputMaybe<Array<InputMaybe<Show_ProgramRelationshipInput>>>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationShowUpdateInput = {
  _status?: InputMaybe<ShowUpdate__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  performers?: InputMaybe<Array<InputMaybe<ShowUpdate_PerformersRelationshipInput>>>;
  program?: InputMaybe<Array<InputMaybe<ShowUpdate_ProgramRelationshipInput>>>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationSongInput = {
  _status?: InputMaybe<Song__Status_MutationInput>;
  artists?: InputMaybe<Array<InputMaybe<Song_ArtistsRelationshipInput>>>;
  country?: InputMaybe<Song_Country_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  lyrics?: InputMaybe<Scalars['JSON']>;
  lyricsAuthors?: InputMaybe<Array<InputMaybe<Song_LyricsAuthorsRelationshipInput>>>;
  musicAuthors?: InputMaybe<Array<InputMaybe<Song_MusicAuthorsRelationshipInput>>>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationSongUpdateInput = {
  _status?: InputMaybe<SongUpdate__Status_MutationInput>;
  artists?: InputMaybe<Array<InputMaybe<SongUpdate_ArtistsRelationshipInput>>>;
  country?: InputMaybe<SongUpdate_Country_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  lyrics?: InputMaybe<Scalars['JSON']>;
  lyricsAuthors?: InputMaybe<Array<InputMaybe<SongUpdate_LyricsAuthorsRelationshipInput>>>;
  musicAuthors?: InputMaybe<Array<InputMaybe<SongUpdate_MusicAuthorsRelationshipInput>>>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  hash?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password: Scalars['String'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  salt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  salt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type PerformancesAccess = {
  __typename?: 'performancesAccess';
  create?: Maybe<PerformancesCreateAccess>;
  delete?: Maybe<PerformancesDeleteAccess>;
  fields?: Maybe<PerformancesFields>;
  read?: Maybe<PerformancesReadAccess>;
  readVersions?: Maybe<PerformancesReadVersionsAccess>;
  update?: Maybe<PerformancesUpdateAccess>;
};

export type PerformancesDocAccess = {
  __typename?: 'performancesDocAccess';
  create?: Maybe<PerformancesCreateDocAccess>;
  delete?: Maybe<PerformancesDeleteDocAccess>;
  fields?: Maybe<PerformancesDocAccessFields>;
  read?: Maybe<PerformancesReadDocAccess>;
  readVersions?: Maybe<PerformancesReadVersionsDocAccess>;
  update?: Maybe<PerformancesUpdateDocAccess>;
};

export type PerformersAccess = {
  __typename?: 'performersAccess';
  create?: Maybe<PerformersCreateAccess>;
  delete?: Maybe<PerformersDeleteAccess>;
  fields?: Maybe<PerformersFields>;
  read?: Maybe<PerformersReadAccess>;
  readVersions?: Maybe<PerformersReadVersionsAccess>;
  update?: Maybe<PerformersUpdateAccess>;
};

export type PerformersDocAccess = {
  __typename?: 'performersDocAccess';
  create?: Maybe<PerformersCreateDocAccess>;
  delete?: Maybe<PerformersDeleteDocAccess>;
  fields?: Maybe<PerformersDocAccessFields>;
  read?: Maybe<PerformersReadDocAccess>;
  readVersions?: Maybe<PerformersReadVersionsDocAccess>;
  update?: Maybe<PerformersUpdateDocAccess>;
};

export type SettingsAccess = {
  __typename?: 'settingsAccess';
  fields?: Maybe<SettingsFields>;
  read?: Maybe<SettingsReadAccess>;
  readVersions?: Maybe<SettingsReadVersionsAccess>;
  update?: Maybe<SettingsUpdateAccess>;
};

export type SettingsDocAccess = {
  __typename?: 'settingsDocAccess';
  fields?: Maybe<SettingsDocAccessFields>;
  read?: Maybe<SettingsReadDocAccess>;
  readVersions?: Maybe<SettingsReadVersionsDocAccess>;
  update?: Maybe<SettingsUpdateDocAccess>;
};

export type ShowsAccess = {
  __typename?: 'showsAccess';
  create?: Maybe<ShowsCreateAccess>;
  delete?: Maybe<ShowsDeleteAccess>;
  fields?: Maybe<ShowsFields>;
  read?: Maybe<ShowsReadAccess>;
  readVersions?: Maybe<ShowsReadVersionsAccess>;
  update?: Maybe<ShowsUpdateAccess>;
};

export type ShowsDocAccess = {
  __typename?: 'showsDocAccess';
  create?: Maybe<ShowsCreateDocAccess>;
  delete?: Maybe<ShowsDeleteDocAccess>;
  fields?: Maybe<ShowsDocAccessFields>;
  read?: Maybe<ShowsReadDocAccess>;
  readVersions?: Maybe<ShowsReadVersionsDocAccess>;
  update?: Maybe<ShowsUpdateDocAccess>;
};

export type SongsAccess = {
  __typename?: 'songsAccess';
  create?: Maybe<SongsCreateAccess>;
  delete?: Maybe<SongsDeleteAccess>;
  fields?: Maybe<SongsFields>;
  read?: Maybe<SongsReadAccess>;
  readVersions?: Maybe<SongsReadVersionsAccess>;
  update?: Maybe<SongsUpdateAccess>;
};

export type SongsDocAccess = {
  __typename?: 'songsDocAccess';
  create?: Maybe<SongsCreateDocAccess>;
  delete?: Maybe<SongsDeleteDocAccess>;
  fields?: Maybe<SongsDocAccessFields>;
  read?: Maybe<SongsReadDocAccess>;
  readVersions?: Maybe<SongsReadVersionsDocAccess>;
  update?: Maybe<SongsUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String'];
  email: Scalars['EmailAddress'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']>;
  refreshedToken?: Maybe<Scalars['String']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type VersionsArtist_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsArtist_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsArtist_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type VersionsArtist_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type VersionsArtist_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export enum VersionsArtist_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsArtist_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsArtist_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsArtist_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<VersionsArtist_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsArtist_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsArtist_Version___Status_Input>>>;
};

export type VersionsArtist_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsArtist_Version__Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type VersionsArtist_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsArtist_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsArtist_Version__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsArtist_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsArtist_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsArtist_Where_Or>>>;
  createdAt?: InputMaybe<VersionsArtist_CreatedAt_Operator>;
  id?: InputMaybe<VersionsArtist_Id_Operator>;
  latest?: InputMaybe<VersionsArtist_Latest_Operator>;
  parent?: InputMaybe<VersionsArtist_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsArtist_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsArtist_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsArtist_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsArtist_Version__Description_Operator>;
  version__title?: InputMaybe<VersionsArtist_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsArtist_Version__UpdatedAt_Operator>;
  version__url?: InputMaybe<VersionsArtist_Version__Url_Operator>;
};

export type VersionsArtist_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsArtist_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsArtist_Where_Or>>>;
  createdAt?: InputMaybe<VersionsArtist_CreatedAt_Operator>;
  id?: InputMaybe<VersionsArtist_Id_Operator>;
  latest?: InputMaybe<VersionsArtist_Latest_Operator>;
  parent?: InputMaybe<VersionsArtist_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsArtist_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsArtist_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsArtist_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsArtist_Version__Description_Operator>;
  version__title?: InputMaybe<VersionsArtist_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsArtist_Version__UpdatedAt_Operator>;
  version__url?: InputMaybe<VersionsArtist_Version__Url_Operator>;
};

export type VersionsArtist_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsArtist_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsArtist_Where_Or>>>;
  createdAt?: InputMaybe<VersionsArtist_CreatedAt_Operator>;
  id?: InputMaybe<VersionsArtist_Id_Operator>;
  latest?: InputMaybe<VersionsArtist_Latest_Operator>;
  parent?: InputMaybe<VersionsArtist_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsArtist_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsArtist_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsArtist_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsArtist_Version__Description_Operator>;
  version__title?: InputMaybe<VersionsArtist_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsArtist_Version__UpdatedAt_Operator>;
  version__url?: InputMaybe<VersionsArtist_Version__Url_Operator>;
};

export type VersionsArtists = {
  __typename?: 'versionsArtists';
  docs?: Maybe<Array<Maybe<ArtistVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type VersionsPerformance_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsPerformance_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsPerformance_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type VersionsPerformance_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type VersionsPerformance_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export enum VersionsPerformance_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsPerformance_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPerformance_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsPerformance_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<VersionsPerformance_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsPerformance_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsPerformance_Version___Status_Input>>>;
};

export type VersionsPerformance_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsPerformance_Version__Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type VersionsPerformance_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsPerformance_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsPerformance_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPerformance_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPerformance_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPerformance_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPerformance_Id_Operator>;
  latest?: InputMaybe<VersionsPerformance_Latest_Operator>;
  parent?: InputMaybe<VersionsPerformance_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPerformance_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPerformance_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPerformance_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsPerformance_Version__Description_Operator>;
  version__title?: InputMaybe<VersionsPerformance_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPerformance_Version__UpdatedAt_Operator>;
};

export type VersionsPerformance_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPerformance_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPerformance_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPerformance_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPerformance_Id_Operator>;
  latest?: InputMaybe<VersionsPerformance_Latest_Operator>;
  parent?: InputMaybe<VersionsPerformance_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPerformance_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPerformance_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPerformance_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsPerformance_Version__Description_Operator>;
  version__title?: InputMaybe<VersionsPerformance_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPerformance_Version__UpdatedAt_Operator>;
};

export type VersionsPerformance_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPerformance_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPerformance_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPerformance_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPerformance_Id_Operator>;
  latest?: InputMaybe<VersionsPerformance_Latest_Operator>;
  parent?: InputMaybe<VersionsPerformance_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPerformance_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPerformance_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPerformance_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsPerformance_Version__Description_Operator>;
  version__title?: InputMaybe<VersionsPerformance_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPerformance_Version__UpdatedAt_Operator>;
};

export type VersionsPerformances = {
  __typename?: 'versionsPerformances';
  docs?: Maybe<Array<Maybe<PerformanceVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type VersionsPerformer_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsPerformer_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsPerformer_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type VersionsPerformer_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type VersionsPerformer_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export enum VersionsPerformer_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsPerformer_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPerformer_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsPerformer_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<VersionsPerformer_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsPerformer_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsPerformer_Version___Status_Input>>>;
};

export type VersionsPerformer_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsPerformer_Version__Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type VersionsPerformer_Version__Image_Operator = {
  equals?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type VersionsPerformer_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsPerformer_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsPerformer_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPerformer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPerformer_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPerformer_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPerformer_Id_Operator>;
  latest?: InputMaybe<VersionsPerformer_Latest_Operator>;
  parent?: InputMaybe<VersionsPerformer_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPerformer_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPerformer_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPerformer_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsPerformer_Version__Description_Operator>;
  version__image?: InputMaybe<VersionsPerformer_Version__Image_Operator>;
  version__title?: InputMaybe<VersionsPerformer_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPerformer_Version__UpdatedAt_Operator>;
};

export type VersionsPerformer_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPerformer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPerformer_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPerformer_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPerformer_Id_Operator>;
  latest?: InputMaybe<VersionsPerformer_Latest_Operator>;
  parent?: InputMaybe<VersionsPerformer_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPerformer_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPerformer_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPerformer_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsPerformer_Version__Description_Operator>;
  version__image?: InputMaybe<VersionsPerformer_Version__Image_Operator>;
  version__title?: InputMaybe<VersionsPerformer_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPerformer_Version__UpdatedAt_Operator>;
};

export type VersionsPerformer_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPerformer_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPerformer_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPerformer_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPerformer_Id_Operator>;
  latest?: InputMaybe<VersionsPerformer_Latest_Operator>;
  parent?: InputMaybe<VersionsPerformer_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPerformer_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPerformer_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPerformer_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsPerformer_Version__Description_Operator>;
  version__image?: InputMaybe<VersionsPerformer_Version__Image_Operator>;
  version__title?: InputMaybe<VersionsPerformer_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPerformer_Version__UpdatedAt_Operator>;
};

export type VersionsPerformers = {
  __typename?: 'versionsPerformers';
  docs?: Maybe<Array<Maybe<PerformerVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type VersionsSetting = {
  __typename?: 'versionsSetting';
  docs?: Maybe<Array<Maybe<SettingVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type VersionsSetting_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsSetting_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsSetting_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type VersionsSetting_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export enum VersionsSetting_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsSetting_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsSetting_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsSetting_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<VersionsSetting_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsSetting_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsSetting_Version___Status_Input>>>;
};

export type VersionsSetting_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsSetting_Version__Now_Relation = {
  relationTo?: InputMaybe<VersionsSetting_Version__Now_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum VersionsSetting_Version__Now_Relation_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export type VersionsSetting_Version__Show_Relation = {
  relationTo?: InputMaybe<VersionsSetting_Version__Show_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum VersionsSetting_Version__Show_Relation_RelationTo {
  Shows = 'shows'
}

export type VersionsSetting_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsSetting_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsSetting_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsSetting_Where_Or>>>;
  createdAt?: InputMaybe<VersionsSetting_CreatedAt_Operator>;
  id?: InputMaybe<VersionsSetting_Id_Operator>;
  latest?: InputMaybe<VersionsSetting_Latest_Operator>;
  updatedAt?: InputMaybe<VersionsSetting_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsSetting_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsSetting_Version__CreatedAt_Operator>;
  version__now?: InputMaybe<VersionsSetting_Version__Now_Relation>;
  version__show?: InputMaybe<VersionsSetting_Version__Show_Relation>;
  version__updatedAt?: InputMaybe<VersionsSetting_Version__UpdatedAt_Operator>;
};

export type VersionsSetting_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsSetting_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsSetting_Where_Or>>>;
  createdAt?: InputMaybe<VersionsSetting_CreatedAt_Operator>;
  id?: InputMaybe<VersionsSetting_Id_Operator>;
  latest?: InputMaybe<VersionsSetting_Latest_Operator>;
  updatedAt?: InputMaybe<VersionsSetting_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsSetting_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsSetting_Version__CreatedAt_Operator>;
  version__now?: InputMaybe<VersionsSetting_Version__Now_Relation>;
  version__show?: InputMaybe<VersionsSetting_Version__Show_Relation>;
  version__updatedAt?: InputMaybe<VersionsSetting_Version__UpdatedAt_Operator>;
};

export type VersionsSetting_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsSetting_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsSetting_Where_Or>>>;
  createdAt?: InputMaybe<VersionsSetting_CreatedAt_Operator>;
  id?: InputMaybe<VersionsSetting_Id_Operator>;
  latest?: InputMaybe<VersionsSetting_Latest_Operator>;
  updatedAt?: InputMaybe<VersionsSetting_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsSetting_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsSetting_Version__CreatedAt_Operator>;
  version__now?: InputMaybe<VersionsSetting_Version__Now_Relation>;
  version__show?: InputMaybe<VersionsSetting_Version__Show_Relation>;
  version__updatedAt?: InputMaybe<VersionsSetting_Version__UpdatedAt_Operator>;
};

export type VersionsShow_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsShow_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsShow_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type VersionsShow_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type VersionsShow_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export enum VersionsShow_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsShow_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsShow_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsShow_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<VersionsShow_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsShow_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsShow_Version___Status_Input>>>;
};

export type VersionsShow_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsShow_Version__Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type VersionsShow_Version__Performers_Relation = {
  relationTo?: InputMaybe<VersionsShow_Version__Performers_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum VersionsShow_Version__Performers_Relation_RelationTo {
  Performers = 'performers'
}

export type VersionsShow_Version__Program_Relation = {
  relationTo?: InputMaybe<VersionsShow_Version__Program_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum VersionsShow_Version__Program_Relation_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export type VersionsShow_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsShow_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsShow_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsShow_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsShow_Where_Or>>>;
  createdAt?: InputMaybe<VersionsShow_CreatedAt_Operator>;
  id?: InputMaybe<VersionsShow_Id_Operator>;
  latest?: InputMaybe<VersionsShow_Latest_Operator>;
  parent?: InputMaybe<VersionsShow_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsShow_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsShow_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsShow_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsShow_Version__Description_Operator>;
  version__performers?: InputMaybe<VersionsShow_Version__Performers_Relation>;
  version__program?: InputMaybe<VersionsShow_Version__Program_Relation>;
  version__title?: InputMaybe<VersionsShow_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsShow_Version__UpdatedAt_Operator>;
};

export type VersionsShow_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsShow_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsShow_Where_Or>>>;
  createdAt?: InputMaybe<VersionsShow_CreatedAt_Operator>;
  id?: InputMaybe<VersionsShow_Id_Operator>;
  latest?: InputMaybe<VersionsShow_Latest_Operator>;
  parent?: InputMaybe<VersionsShow_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsShow_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsShow_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsShow_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsShow_Version__Description_Operator>;
  version__performers?: InputMaybe<VersionsShow_Version__Performers_Relation>;
  version__program?: InputMaybe<VersionsShow_Version__Program_Relation>;
  version__title?: InputMaybe<VersionsShow_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsShow_Version__UpdatedAt_Operator>;
};

export type VersionsShow_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsShow_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsShow_Where_Or>>>;
  createdAt?: InputMaybe<VersionsShow_CreatedAt_Operator>;
  id?: InputMaybe<VersionsShow_Id_Operator>;
  latest?: InputMaybe<VersionsShow_Latest_Operator>;
  parent?: InputMaybe<VersionsShow_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsShow_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsShow_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsShow_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsShow_Version__Description_Operator>;
  version__performers?: InputMaybe<VersionsShow_Version__Performers_Relation>;
  version__program?: InputMaybe<VersionsShow_Version__Program_Relation>;
  version__title?: InputMaybe<VersionsShow_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsShow_Version__UpdatedAt_Operator>;
};

export type VersionsShows = {
  __typename?: 'versionsShows';
  docs?: Maybe<Array<Maybe<ShowVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type VersionsSong_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsSong_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsSong_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type VersionsSong_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type VersionsSong_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export enum VersionsSong_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsSong_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsSong_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsSong_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<VersionsSong_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsSong_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsSong_Version___Status_Input>>>;
};

export type VersionsSong_Version__Artists_Relation = {
  relationTo?: InputMaybe<VersionsSong_Version__Artists_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum VersionsSong_Version__Artists_Relation_RelationTo {
  Artists = 'artists'
}

export enum VersionsSong_Version__Country_Input {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  An = 'AN',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type VersionsSong_Version__Country_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsSong_Version__Country_Input>>>;
  equals?: InputMaybe<VersionsSong_Version__Country_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<VersionsSong_Version__Country_Input>>>;
  not_equals?: InputMaybe<VersionsSong_Version__Country_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsSong_Version__Country_Input>>>;
};

export type VersionsSong_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsSong_Version__Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type VersionsSong_Version__LyricsAuthors_Relation = {
  relationTo?: InputMaybe<VersionsSong_Version__LyricsAuthors_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum VersionsSong_Version__LyricsAuthors_Relation_RelationTo {
  Artists = 'artists'
}

export type VersionsSong_Version__Lyrics_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type VersionsSong_Version__MusicAuthors_Relation = {
  relationTo?: InputMaybe<VersionsSong_Version__MusicAuthors_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum VersionsSong_Version__MusicAuthors_Relation_RelationTo {
  Artists = 'artists'
}

export type VersionsSong_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsSong_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsSong_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsSong_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsSong_Where_Or>>>;
  createdAt?: InputMaybe<VersionsSong_CreatedAt_Operator>;
  id?: InputMaybe<VersionsSong_Id_Operator>;
  latest?: InputMaybe<VersionsSong_Latest_Operator>;
  parent?: InputMaybe<VersionsSong_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsSong_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsSong_Version___Status_Operator>;
  version__artists?: InputMaybe<VersionsSong_Version__Artists_Relation>;
  version__country?: InputMaybe<VersionsSong_Version__Country_Operator>;
  version__createdAt?: InputMaybe<VersionsSong_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsSong_Version__Description_Operator>;
  version__lyrics?: InputMaybe<VersionsSong_Version__Lyrics_Operator>;
  version__lyricsAuthors?: InputMaybe<VersionsSong_Version__LyricsAuthors_Relation>;
  version__musicAuthors?: InputMaybe<VersionsSong_Version__MusicAuthors_Relation>;
  version__title?: InputMaybe<VersionsSong_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsSong_Version__UpdatedAt_Operator>;
};

export type VersionsSong_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsSong_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsSong_Where_Or>>>;
  createdAt?: InputMaybe<VersionsSong_CreatedAt_Operator>;
  id?: InputMaybe<VersionsSong_Id_Operator>;
  latest?: InputMaybe<VersionsSong_Latest_Operator>;
  parent?: InputMaybe<VersionsSong_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsSong_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsSong_Version___Status_Operator>;
  version__artists?: InputMaybe<VersionsSong_Version__Artists_Relation>;
  version__country?: InputMaybe<VersionsSong_Version__Country_Operator>;
  version__createdAt?: InputMaybe<VersionsSong_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsSong_Version__Description_Operator>;
  version__lyrics?: InputMaybe<VersionsSong_Version__Lyrics_Operator>;
  version__lyricsAuthors?: InputMaybe<VersionsSong_Version__LyricsAuthors_Relation>;
  version__musicAuthors?: InputMaybe<VersionsSong_Version__MusicAuthors_Relation>;
  version__title?: InputMaybe<VersionsSong_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsSong_Version__UpdatedAt_Operator>;
};

export type VersionsSong_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsSong_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsSong_Where_Or>>>;
  createdAt?: InputMaybe<VersionsSong_CreatedAt_Operator>;
  id?: InputMaybe<VersionsSong_Id_Operator>;
  latest?: InputMaybe<VersionsSong_Latest_Operator>;
  parent?: InputMaybe<VersionsSong_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsSong_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsSong_Version___Status_Operator>;
  version__artists?: InputMaybe<VersionsSong_Version__Artists_Relation>;
  version__country?: InputMaybe<VersionsSong_Version__Country_Operator>;
  version__createdAt?: InputMaybe<VersionsSong_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsSong_Version__Description_Operator>;
  version__lyrics?: InputMaybe<VersionsSong_Version__Lyrics_Operator>;
  version__lyricsAuthors?: InputMaybe<VersionsSong_Version__LyricsAuthors_Relation>;
  version__musicAuthors?: InputMaybe<VersionsSong_Version__MusicAuthors_Relation>;
  version__title?: InputMaybe<VersionsSong_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsSong_Version__UpdatedAt_Operator>;
};

export type VersionsSongs = {
  __typename?: 'versionsSongs';
  docs?: Maybe<Array<Maybe<SongVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type ArtistSummaryFragment = { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null };

export type ImageFragment = { __typename?: 'Media', id?: string | null, title?: string | null, url?: string | null, alt?: string | null, mimeType?: string | null };

export type PerformanceFragment = { __typename?: 'Performance', id?: string | null, title?: string | null, description?: any | null };

export type PerformanceSummaryFragment = { __typename?: 'Performance', id?: string | null, title?: string | null, description?: any | null };

export type SongFragment = { __typename?: 'Song', id?: string | null, country?: Song_Country | null, title?: string | null, description?: any | null, lyrics?: any | null, artists?: Array<{ __typename?: 'Song_Artists_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null, lyricsAuthors?: Array<{ __typename?: 'Song_LyricsAuthors_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null, musicAuthors?: Array<{ __typename?: 'Song_MusicAuthors_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null };

export type SongSummaryFragment = { __typename?: 'Song', id?: string | null, title?: string | null, country?: Song_Country | null, description?: any | null };

export type NowSettingQueryVariables = Exact<{ [key: string]: never; }>;


export type NowSettingQuery = { __typename?: 'Query', Setting?: { __typename?: 'Setting', now?: { __typename?: 'Setting_Now_Relationship', value?: { __typename: 'Performance', id?: string | null, title?: string | null, description?: any | null } | { __typename: 'Song', id?: string | null, country?: Song_Country | null, title?: string | null, description?: any | null, lyrics?: any | null, artists?: Array<{ __typename?: 'Song_Artists_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null, lyricsAuthors?: Array<{ __typename?: 'Song_LyricsAuthors_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null, musicAuthors?: Array<{ __typename?: 'Song_MusicAuthors_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null } | null } | null } | null };

export type PerformanceQueryVariables = Exact<{
  performanceId: Scalars['String'];
}>;


export type PerformanceQuery = { __typename?: 'Query', Performance?: { __typename?: 'Performance', id?: string | null, title?: string | null, description?: any | null } | null };

export type ShowDescriptionQueryVariables = Exact<{
  showId: Scalars['String'];
}>;


export type ShowDescriptionQuery = { __typename?: 'Query', Show?: { __typename?: 'Show', title?: string | null, description?: any | null } | null };

export type ShowPerformersQueryVariables = Exact<{
  showId: Scalars['String'];
}>;


export type ShowPerformersQuery = { __typename?: 'Query', Show?: { __typename?: 'Show', performers?: Array<{ __typename?: 'Show_Performers_Relationship', value?: { __typename?: 'Performer', id?: string | null, title?: string | null, description?: any | null, image?: { __typename?: 'Media', id?: string | null, title?: string | null, url?: string | null, alt?: string | null, mimeType?: string | null } | null } | null }> | null } | null };

export type ShowProgramQueryVariables = Exact<{
  showId: Scalars['String'];
}>;


export type ShowProgramQuery = { __typename?: 'Query', Show?: { __typename?: 'Show', program?: Array<{ __typename?: 'Show_Program_Relationship', value?: { __typename: 'Performance', id?: string | null, title?: string | null, description?: any | null } | { __typename: 'Song', id?: string | null, title?: string | null, country?: Song_Country | null, description?: any | null } | null }> | null } | null };

export type ShowSettingQueryVariables = Exact<{ [key: string]: never; }>;


export type ShowSettingQuery = { __typename?: 'Query', Setting?: { __typename?: 'Setting', show?: { __typename?: 'Setting_Show_Relationship', value?: { __typename: 'Show', id?: string | null } | null } | null } | null };

export type SongQueryVariables = Exact<{
  songId: Scalars['String'];
}>;


export type SongQuery = { __typename?: 'Query', Song?: { __typename?: 'Song', id?: string | null, country?: Song_Country | null, title?: string | null, description?: any | null, lyrics?: any | null, artists?: Array<{ __typename?: 'Song_Artists_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null, lyricsAuthors?: Array<{ __typename?: 'Song_LyricsAuthors_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null, musicAuthors?: Array<{ __typename?: 'Song_MusicAuthors_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null } | null };

export const ImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Image"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]} as unknown as DocumentNode<ImageFragment, unknown>;
export const PerformanceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Performance"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Performance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<PerformanceFragment, unknown>;
export const PerformanceSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PerformanceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Performance"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<PerformanceSummaryFragment, unknown>;
export const ArtistSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artist"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<ArtistSummaryFragment, unknown>;
export const SongFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Song"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Song"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"artists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lyricsAuthors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"musicAuthors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistSummary"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lyrics"}}]}}]} as unknown as DocumentNode<SongFragment, unknown>;
export const SongSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SongSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Song"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<SongSummaryFragment, unknown>;
export const NowSettingDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NowSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Setting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"BooleanValue","value":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"now"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Song"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Performance"}}]}}]}}]}}]}},...SongFragmentDoc.definitions,...ArtistSummaryFragmentDoc.definitions,...PerformanceFragmentDoc.definitions]} as unknown as DocumentNode<NowSettingQuery, NowSettingQueryVariables>;
export const PerformanceDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Performance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"performanceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Performance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"performanceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Performance"}}]}}]}},...PerformanceFragmentDoc.definitions]} as unknown as DocumentNode<PerformanceQuery, PerformanceQueryVariables>;
export const ShowDescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowDescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"showId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Show"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"showId"}}},{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<ShowDescriptionQuery, ShowDescriptionQueryVariables>;
export const ShowPerformersDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowPerformers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"showId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Show"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"showId"}}},{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"performers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Performer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Image"}}]}}]}}]}}]}}]}}]}},...ImageFragmentDoc.definitions]} as unknown as DocumentNode<ShowPerformersQuery, ShowPerformersQueryVariables>;
export const ShowProgramDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowProgram"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"showId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Show"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"showId"}}},{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PerformanceSummary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SongSummary"}}]}}]}}]}}]}},...PerformanceSummaryFragmentDoc.definitions,...SongSummaryFragmentDoc.definitions]} as unknown as DocumentNode<ShowProgramQuery, ShowProgramQueryVariables>;
export const ShowSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Setting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"show"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Show"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ShowSettingQuery, ShowSettingQueryVariables>;
export const SongDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Song"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"songId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Song"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"songId"}}},{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Song"}}]}}]}},...SongFragmentDoc.definitions,...ArtistSummaryFragmentDoc.definitions]} as unknown as DocumentNode<SongQuery, SongQueryVariables>;