import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  EmailAddress: any
  JSON: any
  JSONObject: any
}

export interface Access {
  __typename?: 'Access'
  artists?: Maybe<ArtistsAccess>
  canAccessAdmin: Scalars['Boolean']
  media?: Maybe<MediaAccess>
  payload_preferences?: Maybe<Payload_PreferencesAccess>
  performances?: Maybe<PerformancesAccess>
  performers?: Maybe<PerformersAccess>
  settings?: Maybe<SettingsAccess>
  shows?: Maybe<ShowsAccess>
  songs?: Maybe<SongsAccess>
  users?: Maybe<UsersAccess>
}

export interface Artist {
  __typename?: 'Artist'
  _status?: Maybe<Artist__Status>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['JSON']>
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url?: Maybe<Scalars['String']>
}

export interface ArtistDescriptionArgs {
  depth?: InputMaybe<Scalars['Int']>
}

export enum ArtistUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export interface ArtistVersion {
  __typename?: 'ArtistVersion'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  latest?: Maybe<Scalars['Boolean']>
  parent?: Maybe<Artist>
  updatedAt?: Maybe<Scalars['DateTime']>
  version?: Maybe<ArtistVersion_Version>
}

export interface ArtistVersionParentArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface ArtistVersion_Version {
  __typename?: 'ArtistVersion_Version'
  _status?: Maybe<ArtistVersion_Version__Status>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['JSON']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url?: Maybe<Scalars['String']>
}

export interface ArtistVersion_VersionDescriptionArgs {
  depth?: InputMaybe<Scalars['Int']>
}

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

export interface Artist__Status_Operator {
  all?: InputMaybe<Array<InputMaybe<Artist__Status_Input>>>
  equals?: InputMaybe<Artist__Status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Artist__Status_Input>>>
  not_equals?: InputMaybe<Artist__Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<Artist__Status_Input>>>
}

export interface Artist_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Artist_Description_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
}

export interface Artist_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Artist_Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Artist_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Artist_Url_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Artist_Where {
  AND?: InputMaybe<Array<InputMaybe<Artist_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Artist_Where_Or>>>
  _status?: InputMaybe<Artist__Status_Operator>
  createdAt?: InputMaybe<Artist_CreatedAt_Operator>
  description?: InputMaybe<Artist_Description_Operator>
  id?: InputMaybe<Artist_Id_Operator>
  title?: InputMaybe<Artist_Title_Operator>
  updatedAt?: InputMaybe<Artist_UpdatedAt_Operator>
  url?: InputMaybe<Artist_Url_Operator>
}

export interface Artist_Where_And {
  AND?: InputMaybe<Array<InputMaybe<Artist_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Artist_Where_Or>>>
  _status?: InputMaybe<Artist__Status_Operator>
  createdAt?: InputMaybe<Artist_CreatedAt_Operator>
  description?: InputMaybe<Artist_Description_Operator>
  id?: InputMaybe<Artist_Id_Operator>
  title?: InputMaybe<Artist_Title_Operator>
  updatedAt?: InputMaybe<Artist_UpdatedAt_Operator>
  url?: InputMaybe<Artist_Url_Operator>
}

export interface Artist_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<Artist_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Artist_Where_Or>>>
  _status?: InputMaybe<Artist__Status_Operator>
  createdAt?: InputMaybe<Artist_CreatedAt_Operator>
  description?: InputMaybe<Artist_Description_Operator>
  id?: InputMaybe<Artist_Id_Operator>
  title?: InputMaybe<Artist_Title_Operator>
  updatedAt?: InputMaybe<Artist_UpdatedAt_Operator>
  url?: InputMaybe<Artist_Url_Operator>
}

export interface Artists {
  __typename?: 'Artists'
  docs?: Maybe<Array<Maybe<Artist>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface ArtistsCreateAccess {
  __typename?: 'ArtistsCreateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ArtistsCreateDocAccess {
  __typename?: 'ArtistsCreateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ArtistsDeleteAccess {
  __typename?: 'ArtistsDeleteAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ArtistsDeleteDocAccess {
  __typename?: 'ArtistsDeleteDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ArtistsDocAccessFields {
  __typename?: 'ArtistsDocAccessFields'
  _status?: Maybe<ArtistsDocAccessFields__Status>
  createdAt?: Maybe<ArtistsDocAccessFields_CreatedAt>
  description?: Maybe<ArtistsDocAccessFields_Description>
  title?: Maybe<ArtistsDocAccessFields_Title>
  updatedAt?: Maybe<ArtistsDocAccessFields_UpdatedAt>
  url?: Maybe<ArtistsDocAccessFields_Url>
}

export interface ArtistsDocAccessFields__Status {
  __typename?: 'ArtistsDocAccessFields__status'
  create?: Maybe<ArtistsDocAccessFields__Status_Create>
  delete?: Maybe<ArtistsDocAccessFields__Status_Delete>
  read?: Maybe<ArtistsDocAccessFields__Status_Read>
  update?: Maybe<ArtistsDocAccessFields__Status_Update>
}

export interface ArtistsDocAccessFields__Status_Create {
  __typename?: 'ArtistsDocAccessFields__status_Create'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields__Status_Delete {
  __typename?: 'ArtistsDocAccessFields__status_Delete'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields__Status_Read {
  __typename?: 'ArtistsDocAccessFields__status_Read'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields__Status_Update {
  __typename?: 'ArtistsDocAccessFields__status_Update'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_CreatedAt {
  __typename?: 'ArtistsDocAccessFields_createdAt'
  create?: Maybe<ArtistsDocAccessFields_CreatedAt_Create>
  delete?: Maybe<ArtistsDocAccessFields_CreatedAt_Delete>
  read?: Maybe<ArtistsDocAccessFields_CreatedAt_Read>
  update?: Maybe<ArtistsDocAccessFields_CreatedAt_Update>
}

export interface ArtistsDocAccessFields_CreatedAt_Create {
  __typename?: 'ArtistsDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_CreatedAt_Delete {
  __typename?: 'ArtistsDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_CreatedAt_Read {
  __typename?: 'ArtistsDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_CreatedAt_Update {
  __typename?: 'ArtistsDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_Description {
  __typename?: 'ArtistsDocAccessFields_description'
  create?: Maybe<ArtistsDocAccessFields_Description_Create>
  delete?: Maybe<ArtistsDocAccessFields_Description_Delete>
  read?: Maybe<ArtistsDocAccessFields_Description_Read>
  update?: Maybe<ArtistsDocAccessFields_Description_Update>
}

export interface ArtistsDocAccessFields_Description_Create {
  __typename?: 'ArtistsDocAccessFields_description_Create'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_Description_Delete {
  __typename?: 'ArtistsDocAccessFields_description_Delete'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_Description_Read {
  __typename?: 'ArtistsDocAccessFields_description_Read'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_Description_Update {
  __typename?: 'ArtistsDocAccessFields_description_Update'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_Title {
  __typename?: 'ArtistsDocAccessFields_title'
  create?: Maybe<ArtistsDocAccessFields_Title_Create>
  delete?: Maybe<ArtistsDocAccessFields_Title_Delete>
  read?: Maybe<ArtistsDocAccessFields_Title_Read>
  update?: Maybe<ArtistsDocAccessFields_Title_Update>
}

export interface ArtistsDocAccessFields_Title_Create {
  __typename?: 'ArtistsDocAccessFields_title_Create'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_Title_Delete {
  __typename?: 'ArtistsDocAccessFields_title_Delete'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_Title_Read {
  __typename?: 'ArtistsDocAccessFields_title_Read'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_Title_Update {
  __typename?: 'ArtistsDocAccessFields_title_Update'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_UpdatedAt {
  __typename?: 'ArtistsDocAccessFields_updatedAt'
  create?: Maybe<ArtistsDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<ArtistsDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<ArtistsDocAccessFields_UpdatedAt_Read>
  update?: Maybe<ArtistsDocAccessFields_UpdatedAt_Update>
}

export interface ArtistsDocAccessFields_UpdatedAt_Create {
  __typename?: 'ArtistsDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_UpdatedAt_Delete {
  __typename?: 'ArtistsDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_UpdatedAt_Read {
  __typename?: 'ArtistsDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_UpdatedAt_Update {
  __typename?: 'ArtistsDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_Url {
  __typename?: 'ArtistsDocAccessFields_url'
  create?: Maybe<ArtistsDocAccessFields_Url_Create>
  delete?: Maybe<ArtistsDocAccessFields_Url_Delete>
  read?: Maybe<ArtistsDocAccessFields_Url_Read>
  update?: Maybe<ArtistsDocAccessFields_Url_Update>
}

export interface ArtistsDocAccessFields_Url_Create {
  __typename?: 'ArtistsDocAccessFields_url_Create'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_Url_Delete {
  __typename?: 'ArtistsDocAccessFields_url_Delete'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_Url_Read {
  __typename?: 'ArtistsDocAccessFields_url_Read'
  permission: Scalars['Boolean']
}

export interface ArtistsDocAccessFields_Url_Update {
  __typename?: 'ArtistsDocAccessFields_url_Update'
  permission: Scalars['Boolean']
}

export interface ArtistsFields {
  __typename?: 'ArtistsFields'
  _status?: Maybe<ArtistsFields__Status>
  createdAt?: Maybe<ArtistsFields_CreatedAt>
  description?: Maybe<ArtistsFields_Description>
  title?: Maybe<ArtistsFields_Title>
  updatedAt?: Maybe<ArtistsFields_UpdatedAt>
  url?: Maybe<ArtistsFields_Url>
}

export interface ArtistsFields__Status {
  __typename?: 'ArtistsFields__status'
  create?: Maybe<ArtistsFields__Status_Create>
  delete?: Maybe<ArtistsFields__Status_Delete>
  read?: Maybe<ArtistsFields__Status_Read>
  update?: Maybe<ArtistsFields__Status_Update>
}

export interface ArtistsFields__Status_Create {
  __typename?: 'ArtistsFields__status_Create'
  permission: Scalars['Boolean']
}

export interface ArtistsFields__Status_Delete {
  __typename?: 'ArtistsFields__status_Delete'
  permission: Scalars['Boolean']
}

export interface ArtistsFields__Status_Read {
  __typename?: 'ArtistsFields__status_Read'
  permission: Scalars['Boolean']
}

export interface ArtistsFields__Status_Update {
  __typename?: 'ArtistsFields__status_Update'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_CreatedAt {
  __typename?: 'ArtistsFields_createdAt'
  create?: Maybe<ArtistsFields_CreatedAt_Create>
  delete?: Maybe<ArtistsFields_CreatedAt_Delete>
  read?: Maybe<ArtistsFields_CreatedAt_Read>
  update?: Maybe<ArtistsFields_CreatedAt_Update>
}

export interface ArtistsFields_CreatedAt_Create {
  __typename?: 'ArtistsFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_CreatedAt_Delete {
  __typename?: 'ArtistsFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_CreatedAt_Read {
  __typename?: 'ArtistsFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_CreatedAt_Update {
  __typename?: 'ArtistsFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_Description {
  __typename?: 'ArtistsFields_description'
  create?: Maybe<ArtistsFields_Description_Create>
  delete?: Maybe<ArtistsFields_Description_Delete>
  read?: Maybe<ArtistsFields_Description_Read>
  update?: Maybe<ArtistsFields_Description_Update>
}

export interface ArtistsFields_Description_Create {
  __typename?: 'ArtistsFields_description_Create'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_Description_Delete {
  __typename?: 'ArtistsFields_description_Delete'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_Description_Read {
  __typename?: 'ArtistsFields_description_Read'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_Description_Update {
  __typename?: 'ArtistsFields_description_Update'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_Title {
  __typename?: 'ArtistsFields_title'
  create?: Maybe<ArtistsFields_Title_Create>
  delete?: Maybe<ArtistsFields_Title_Delete>
  read?: Maybe<ArtistsFields_Title_Read>
  update?: Maybe<ArtistsFields_Title_Update>
}

export interface ArtistsFields_Title_Create {
  __typename?: 'ArtistsFields_title_Create'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_Title_Delete {
  __typename?: 'ArtistsFields_title_Delete'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_Title_Read {
  __typename?: 'ArtistsFields_title_Read'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_Title_Update {
  __typename?: 'ArtistsFields_title_Update'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_UpdatedAt {
  __typename?: 'ArtistsFields_updatedAt'
  create?: Maybe<ArtistsFields_UpdatedAt_Create>
  delete?: Maybe<ArtistsFields_UpdatedAt_Delete>
  read?: Maybe<ArtistsFields_UpdatedAt_Read>
  update?: Maybe<ArtistsFields_UpdatedAt_Update>
}

export interface ArtistsFields_UpdatedAt_Create {
  __typename?: 'ArtistsFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_UpdatedAt_Delete {
  __typename?: 'ArtistsFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_UpdatedAt_Read {
  __typename?: 'ArtistsFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_UpdatedAt_Update {
  __typename?: 'ArtistsFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_Url {
  __typename?: 'ArtistsFields_url'
  create?: Maybe<ArtistsFields_Url_Create>
  delete?: Maybe<ArtistsFields_Url_Delete>
  read?: Maybe<ArtistsFields_Url_Read>
  update?: Maybe<ArtistsFields_Url_Update>
}

export interface ArtistsFields_Url_Create {
  __typename?: 'ArtistsFields_url_Create'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_Url_Delete {
  __typename?: 'ArtistsFields_url_Delete'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_Url_Read {
  __typename?: 'ArtistsFields_url_Read'
  permission: Scalars['Boolean']
}

export interface ArtistsFields_Url_Update {
  __typename?: 'ArtistsFields_url_Update'
  permission: Scalars['Boolean']
}

export interface ArtistsReadAccess {
  __typename?: 'ArtistsReadAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ArtistsReadDocAccess {
  __typename?: 'ArtistsReadDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ArtistsReadVersionsAccess {
  __typename?: 'ArtistsReadVersionsAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ArtistsReadVersionsDocAccess {
  __typename?: 'ArtistsReadVersionsDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ArtistsUpdateAccess {
  __typename?: 'ArtistsUpdateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ArtistsUpdateDocAccess {
  __typename?: 'ArtistsUpdateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export enum FallbackLocaleInputType {
  En = 'en',
  None = 'none'
}

export enum LocaleInputType {
  En = 'en'
}

export interface Media {
  __typename?: 'Media'
  alt?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  filename?: Maybe<Scalars['String']>
  filesize?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Float']>
}

export interface MediaCreateAccess {
  __typename?: 'MediaCreateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface MediaCreateDocAccess {
  __typename?: 'MediaCreateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface MediaDeleteAccess {
  __typename?: 'MediaDeleteAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface MediaDeleteDocAccess {
  __typename?: 'MediaDeleteDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface MediaDocAccessFields {
  __typename?: 'MediaDocAccessFields'
  alt?: Maybe<MediaDocAccessFields_Alt>
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>
  filename?: Maybe<MediaDocAccessFields_Filename>
  filesize?: Maybe<MediaDocAccessFields_Filesize>
  height?: Maybe<MediaDocAccessFields_Height>
  mimeType?: Maybe<MediaDocAccessFields_MimeType>
  title?: Maybe<MediaDocAccessFields_Title>
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>
  url?: Maybe<MediaDocAccessFields_Url>
  width?: Maybe<MediaDocAccessFields_Width>
}

export interface MediaDocAccessFields_Alt {
  __typename?: 'MediaDocAccessFields_alt'
  create?: Maybe<MediaDocAccessFields_Alt_Create>
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>
  read?: Maybe<MediaDocAccessFields_Alt_Read>
  update?: Maybe<MediaDocAccessFields_Alt_Update>
}

export interface MediaDocAccessFields_Alt_Create {
  __typename?: 'MediaDocAccessFields_alt_Create'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Alt_Delete {
  __typename?: 'MediaDocAccessFields_alt_Delete'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Alt_Read {
  __typename?: 'MediaDocAccessFields_alt_Read'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Alt_Update {
  __typename?: 'MediaDocAccessFields_alt_Update'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_CreatedAt {
  __typename?: 'MediaDocAccessFields_createdAt'
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>
}

export interface MediaDocAccessFields_CreatedAt_Create {
  __typename?: 'MediaDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_CreatedAt_Delete {
  __typename?: 'MediaDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_CreatedAt_Read {
  __typename?: 'MediaDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_CreatedAt_Update {
  __typename?: 'MediaDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Filename {
  __typename?: 'MediaDocAccessFields_filename'
  create?: Maybe<MediaDocAccessFields_Filename_Create>
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>
  read?: Maybe<MediaDocAccessFields_Filename_Read>
  update?: Maybe<MediaDocAccessFields_Filename_Update>
}

export interface MediaDocAccessFields_Filename_Create {
  __typename?: 'MediaDocAccessFields_filename_Create'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Filename_Delete {
  __typename?: 'MediaDocAccessFields_filename_Delete'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Filename_Read {
  __typename?: 'MediaDocAccessFields_filename_Read'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Filename_Update {
  __typename?: 'MediaDocAccessFields_filename_Update'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Filesize {
  __typename?: 'MediaDocAccessFields_filesize'
  create?: Maybe<MediaDocAccessFields_Filesize_Create>
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>
  read?: Maybe<MediaDocAccessFields_Filesize_Read>
  update?: Maybe<MediaDocAccessFields_Filesize_Update>
}

export interface MediaDocAccessFields_Filesize_Create {
  __typename?: 'MediaDocAccessFields_filesize_Create'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Filesize_Delete {
  __typename?: 'MediaDocAccessFields_filesize_Delete'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Filesize_Read {
  __typename?: 'MediaDocAccessFields_filesize_Read'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Filesize_Update {
  __typename?: 'MediaDocAccessFields_filesize_Update'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Height {
  __typename?: 'MediaDocAccessFields_height'
  create?: Maybe<MediaDocAccessFields_Height_Create>
  delete?: Maybe<MediaDocAccessFields_Height_Delete>
  read?: Maybe<MediaDocAccessFields_Height_Read>
  update?: Maybe<MediaDocAccessFields_Height_Update>
}

export interface MediaDocAccessFields_Height_Create {
  __typename?: 'MediaDocAccessFields_height_Create'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Height_Delete {
  __typename?: 'MediaDocAccessFields_height_Delete'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Height_Read {
  __typename?: 'MediaDocAccessFields_height_Read'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Height_Update {
  __typename?: 'MediaDocAccessFields_height_Update'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_MimeType {
  __typename?: 'MediaDocAccessFields_mimeType'
  create?: Maybe<MediaDocAccessFields_MimeType_Create>
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>
  read?: Maybe<MediaDocAccessFields_MimeType_Read>
  update?: Maybe<MediaDocAccessFields_MimeType_Update>
}

export interface MediaDocAccessFields_MimeType_Create {
  __typename?: 'MediaDocAccessFields_mimeType_Create'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_MimeType_Delete {
  __typename?: 'MediaDocAccessFields_mimeType_Delete'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_MimeType_Read {
  __typename?: 'MediaDocAccessFields_mimeType_Read'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_MimeType_Update {
  __typename?: 'MediaDocAccessFields_mimeType_Update'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Title {
  __typename?: 'MediaDocAccessFields_title'
  create?: Maybe<MediaDocAccessFields_Title_Create>
  delete?: Maybe<MediaDocAccessFields_Title_Delete>
  read?: Maybe<MediaDocAccessFields_Title_Read>
  update?: Maybe<MediaDocAccessFields_Title_Update>
}

export interface MediaDocAccessFields_Title_Create {
  __typename?: 'MediaDocAccessFields_title_Create'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Title_Delete {
  __typename?: 'MediaDocAccessFields_title_Delete'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Title_Read {
  __typename?: 'MediaDocAccessFields_title_Read'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Title_Update {
  __typename?: 'MediaDocAccessFields_title_Update'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_UpdatedAt {
  __typename?: 'MediaDocAccessFields_updatedAt'
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>
}

export interface MediaDocAccessFields_UpdatedAt_Create {
  __typename?: 'MediaDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_UpdatedAt_Delete {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_UpdatedAt_Read {
  __typename?: 'MediaDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_UpdatedAt_Update {
  __typename?: 'MediaDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Url {
  __typename?: 'MediaDocAccessFields_url'
  create?: Maybe<MediaDocAccessFields_Url_Create>
  delete?: Maybe<MediaDocAccessFields_Url_Delete>
  read?: Maybe<MediaDocAccessFields_Url_Read>
  update?: Maybe<MediaDocAccessFields_Url_Update>
}

export interface MediaDocAccessFields_Url_Create {
  __typename?: 'MediaDocAccessFields_url_Create'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Url_Delete {
  __typename?: 'MediaDocAccessFields_url_Delete'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Url_Read {
  __typename?: 'MediaDocAccessFields_url_Read'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Url_Update {
  __typename?: 'MediaDocAccessFields_url_Update'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Width {
  __typename?: 'MediaDocAccessFields_width'
  create?: Maybe<MediaDocAccessFields_Width_Create>
  delete?: Maybe<MediaDocAccessFields_Width_Delete>
  read?: Maybe<MediaDocAccessFields_Width_Read>
  update?: Maybe<MediaDocAccessFields_Width_Update>
}

export interface MediaDocAccessFields_Width_Create {
  __typename?: 'MediaDocAccessFields_width_Create'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Width_Delete {
  __typename?: 'MediaDocAccessFields_width_Delete'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Width_Read {
  __typename?: 'MediaDocAccessFields_width_Read'
  permission: Scalars['Boolean']
}

export interface MediaDocAccessFields_Width_Update {
  __typename?: 'MediaDocAccessFields_width_Update'
  permission: Scalars['Boolean']
}

export interface MediaFields {
  __typename?: 'MediaFields'
  alt?: Maybe<MediaFields_Alt>
  createdAt?: Maybe<MediaFields_CreatedAt>
  filename?: Maybe<MediaFields_Filename>
  filesize?: Maybe<MediaFields_Filesize>
  height?: Maybe<MediaFields_Height>
  mimeType?: Maybe<MediaFields_MimeType>
  title?: Maybe<MediaFields_Title>
  updatedAt?: Maybe<MediaFields_UpdatedAt>
  url?: Maybe<MediaFields_Url>
  width?: Maybe<MediaFields_Width>
}

export interface MediaFields_Alt {
  __typename?: 'MediaFields_alt'
  create?: Maybe<MediaFields_Alt_Create>
  delete?: Maybe<MediaFields_Alt_Delete>
  read?: Maybe<MediaFields_Alt_Read>
  update?: Maybe<MediaFields_Alt_Update>
}

export interface MediaFields_Alt_Create {
  __typename?: 'MediaFields_alt_Create'
  permission: Scalars['Boolean']
}

export interface MediaFields_Alt_Delete {
  __typename?: 'MediaFields_alt_Delete'
  permission: Scalars['Boolean']
}

export interface MediaFields_Alt_Read {
  __typename?: 'MediaFields_alt_Read'
  permission: Scalars['Boolean']
}

export interface MediaFields_Alt_Update {
  __typename?: 'MediaFields_alt_Update'
  permission: Scalars['Boolean']
}

export interface MediaFields_CreatedAt {
  __typename?: 'MediaFields_createdAt'
  create?: Maybe<MediaFields_CreatedAt_Create>
  delete?: Maybe<MediaFields_CreatedAt_Delete>
  read?: Maybe<MediaFields_CreatedAt_Read>
  update?: Maybe<MediaFields_CreatedAt_Update>
}

export interface MediaFields_CreatedAt_Create {
  __typename?: 'MediaFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface MediaFields_CreatedAt_Delete {
  __typename?: 'MediaFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface MediaFields_CreatedAt_Read {
  __typename?: 'MediaFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface MediaFields_CreatedAt_Update {
  __typename?: 'MediaFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface MediaFields_Filename {
  __typename?: 'MediaFields_filename'
  create?: Maybe<MediaFields_Filename_Create>
  delete?: Maybe<MediaFields_Filename_Delete>
  read?: Maybe<MediaFields_Filename_Read>
  update?: Maybe<MediaFields_Filename_Update>
}

export interface MediaFields_Filename_Create {
  __typename?: 'MediaFields_filename_Create'
  permission: Scalars['Boolean']
}

export interface MediaFields_Filename_Delete {
  __typename?: 'MediaFields_filename_Delete'
  permission: Scalars['Boolean']
}

export interface MediaFields_Filename_Read {
  __typename?: 'MediaFields_filename_Read'
  permission: Scalars['Boolean']
}

export interface MediaFields_Filename_Update {
  __typename?: 'MediaFields_filename_Update'
  permission: Scalars['Boolean']
}

export interface MediaFields_Filesize {
  __typename?: 'MediaFields_filesize'
  create?: Maybe<MediaFields_Filesize_Create>
  delete?: Maybe<MediaFields_Filesize_Delete>
  read?: Maybe<MediaFields_Filesize_Read>
  update?: Maybe<MediaFields_Filesize_Update>
}

export interface MediaFields_Filesize_Create {
  __typename?: 'MediaFields_filesize_Create'
  permission: Scalars['Boolean']
}

export interface MediaFields_Filesize_Delete {
  __typename?: 'MediaFields_filesize_Delete'
  permission: Scalars['Boolean']
}

export interface MediaFields_Filesize_Read {
  __typename?: 'MediaFields_filesize_Read'
  permission: Scalars['Boolean']
}

export interface MediaFields_Filesize_Update {
  __typename?: 'MediaFields_filesize_Update'
  permission: Scalars['Boolean']
}

export interface MediaFields_Height {
  __typename?: 'MediaFields_height'
  create?: Maybe<MediaFields_Height_Create>
  delete?: Maybe<MediaFields_Height_Delete>
  read?: Maybe<MediaFields_Height_Read>
  update?: Maybe<MediaFields_Height_Update>
}

export interface MediaFields_Height_Create {
  __typename?: 'MediaFields_height_Create'
  permission: Scalars['Boolean']
}

export interface MediaFields_Height_Delete {
  __typename?: 'MediaFields_height_Delete'
  permission: Scalars['Boolean']
}

export interface MediaFields_Height_Read {
  __typename?: 'MediaFields_height_Read'
  permission: Scalars['Boolean']
}

export interface MediaFields_Height_Update {
  __typename?: 'MediaFields_height_Update'
  permission: Scalars['Boolean']
}

export interface MediaFields_MimeType {
  __typename?: 'MediaFields_mimeType'
  create?: Maybe<MediaFields_MimeType_Create>
  delete?: Maybe<MediaFields_MimeType_Delete>
  read?: Maybe<MediaFields_MimeType_Read>
  update?: Maybe<MediaFields_MimeType_Update>
}

export interface MediaFields_MimeType_Create {
  __typename?: 'MediaFields_mimeType_Create'
  permission: Scalars['Boolean']
}

export interface MediaFields_MimeType_Delete {
  __typename?: 'MediaFields_mimeType_Delete'
  permission: Scalars['Boolean']
}

export interface MediaFields_MimeType_Read {
  __typename?: 'MediaFields_mimeType_Read'
  permission: Scalars['Boolean']
}

export interface MediaFields_MimeType_Update {
  __typename?: 'MediaFields_mimeType_Update'
  permission: Scalars['Boolean']
}

export interface MediaFields_Title {
  __typename?: 'MediaFields_title'
  create?: Maybe<MediaFields_Title_Create>
  delete?: Maybe<MediaFields_Title_Delete>
  read?: Maybe<MediaFields_Title_Read>
  update?: Maybe<MediaFields_Title_Update>
}

export interface MediaFields_Title_Create {
  __typename?: 'MediaFields_title_Create'
  permission: Scalars['Boolean']
}

export interface MediaFields_Title_Delete {
  __typename?: 'MediaFields_title_Delete'
  permission: Scalars['Boolean']
}

export interface MediaFields_Title_Read {
  __typename?: 'MediaFields_title_Read'
  permission: Scalars['Boolean']
}

export interface MediaFields_Title_Update {
  __typename?: 'MediaFields_title_Update'
  permission: Scalars['Boolean']
}

export interface MediaFields_UpdatedAt {
  __typename?: 'MediaFields_updatedAt'
  create?: Maybe<MediaFields_UpdatedAt_Create>
  delete?: Maybe<MediaFields_UpdatedAt_Delete>
  read?: Maybe<MediaFields_UpdatedAt_Read>
  update?: Maybe<MediaFields_UpdatedAt_Update>
}

export interface MediaFields_UpdatedAt_Create {
  __typename?: 'MediaFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface MediaFields_UpdatedAt_Delete {
  __typename?: 'MediaFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface MediaFields_UpdatedAt_Read {
  __typename?: 'MediaFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface MediaFields_UpdatedAt_Update {
  __typename?: 'MediaFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface MediaFields_Url {
  __typename?: 'MediaFields_url'
  create?: Maybe<MediaFields_Url_Create>
  delete?: Maybe<MediaFields_Url_Delete>
  read?: Maybe<MediaFields_Url_Read>
  update?: Maybe<MediaFields_Url_Update>
}

export interface MediaFields_Url_Create {
  __typename?: 'MediaFields_url_Create'
  permission: Scalars['Boolean']
}

export interface MediaFields_Url_Delete {
  __typename?: 'MediaFields_url_Delete'
  permission: Scalars['Boolean']
}

export interface MediaFields_Url_Read {
  __typename?: 'MediaFields_url_Read'
  permission: Scalars['Boolean']
}

export interface MediaFields_Url_Update {
  __typename?: 'MediaFields_url_Update'
  permission: Scalars['Boolean']
}

export interface MediaFields_Width {
  __typename?: 'MediaFields_width'
  create?: Maybe<MediaFields_Width_Create>
  delete?: Maybe<MediaFields_Width_Delete>
  read?: Maybe<MediaFields_Width_Read>
  update?: Maybe<MediaFields_Width_Update>
}

export interface MediaFields_Width_Create {
  __typename?: 'MediaFields_width_Create'
  permission: Scalars['Boolean']
}

export interface MediaFields_Width_Delete {
  __typename?: 'MediaFields_width_Delete'
  permission: Scalars['Boolean']
}

export interface MediaFields_Width_Read {
  __typename?: 'MediaFields_width_Read'
  permission: Scalars['Boolean']
}

export interface MediaFields_Width_Update {
  __typename?: 'MediaFields_width_Update'
  permission: Scalars['Boolean']
}

export interface MediaReadAccess {
  __typename?: 'MediaReadAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface MediaReadDocAccess {
  __typename?: 'MediaReadDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface MediaUpdateAccess {
  __typename?: 'MediaUpdateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface MediaUpdateDocAccess {
  __typename?: 'MediaUpdateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface Media_Alt_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Media_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Media_Filename_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Media_Filesize_Operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Media_Height_Operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Media_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Media_MimeType_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Media_Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Media_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Media_Url_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Media_Where {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>
  alt?: InputMaybe<Media_Alt_Operator>
  createdAt?: InputMaybe<Media_CreatedAt_Operator>
  filename?: InputMaybe<Media_Filename_Operator>
  filesize?: InputMaybe<Media_Filesize_Operator>
  height?: InputMaybe<Media_Height_Operator>
  id?: InputMaybe<Media_Id_Operator>
  mimeType?: InputMaybe<Media_MimeType_Operator>
  title?: InputMaybe<Media_Title_Operator>
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>
  url?: InputMaybe<Media_Url_Operator>
  width?: InputMaybe<Media_Width_Operator>
}

export interface Media_Where_And {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>
  alt?: InputMaybe<Media_Alt_Operator>
  createdAt?: InputMaybe<Media_CreatedAt_Operator>
  filename?: InputMaybe<Media_Filename_Operator>
  filesize?: InputMaybe<Media_Filesize_Operator>
  height?: InputMaybe<Media_Height_Operator>
  id?: InputMaybe<Media_Id_Operator>
  mimeType?: InputMaybe<Media_MimeType_Operator>
  title?: InputMaybe<Media_Title_Operator>
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>
  url?: InputMaybe<Media_Url_Operator>
  width?: InputMaybe<Media_Width_Operator>
}

export interface Media_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>
  alt?: InputMaybe<Media_Alt_Operator>
  createdAt?: InputMaybe<Media_CreatedAt_Operator>
  filename?: InputMaybe<Media_Filename_Operator>
  filesize?: InputMaybe<Media_Filesize_Operator>
  height?: InputMaybe<Media_Height_Operator>
  id?: InputMaybe<Media_Id_Operator>
  mimeType?: InputMaybe<Media_MimeType_Operator>
  title?: InputMaybe<Media_Title_Operator>
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>
  url?: InputMaybe<Media_Url_Operator>
  width?: InputMaybe<Media_Width_Operator>
}

export interface Media_Width_Operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Mutation {
  __typename?: 'Mutation'
  createArtist?: Maybe<Artist>
  createMedia?: Maybe<Media>
  createPayloadPreference?: Maybe<PayloadPreference>
  createPerformance?: Maybe<Performance>
  createPerformer?: Maybe<Performer>
  createShow?: Maybe<Show>
  createSong?: Maybe<Song>
  createUser?: Maybe<User>
  deleteArtist?: Maybe<Artist>
  deleteMedia?: Maybe<Media>
  deletePayloadPreference?: Maybe<PayloadPreference>
  deletePerformance?: Maybe<Performance>
  deletePerformer?: Maybe<Performer>
  deleteShow?: Maybe<Show>
  deleteSong?: Maybe<Song>
  deleteUser?: Maybe<User>
  forgotPasswordUser: Scalars['Boolean']
  loginUser?: Maybe<UsersLoginResult>
  logoutUser?: Maybe<Scalars['String']>
  refreshTokenUser?: Maybe<UsersRefreshedUser>
  resetPasswordUser?: Maybe<UsersResetPassword>
  restoreVersionArtist?: Maybe<Artist>
  restoreVersionPerformance?: Maybe<Performance>
  restoreVersionPerformer?: Maybe<Performer>
  restoreVersionSetting?: Maybe<Setting>
  restoreVersionShow?: Maybe<Show>
  restoreVersionSong?: Maybe<Song>
  unlockUser: Scalars['Boolean']
  updateArtist?: Maybe<Artist>
  updateMedia?: Maybe<Media>
  updatePayloadPreference?: Maybe<PayloadPreference>
  updatePerformance?: Maybe<Performance>
  updatePerformer?: Maybe<Performer>
  updateSetting?: Maybe<Setting>
  updateShow?: Maybe<Show>
  updateSong?: Maybe<Song>
  updateUser?: Maybe<User>
  verifyEmailUser?: Maybe<Scalars['Boolean']>
}

export interface MutationCreateArtistArgs {
  data: MutationArtistInput
  draft?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationCreateMediaArgs {
  data: MutationMediaInput
  draft?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationCreatePayloadPreferenceArgs {
  data: MutationPayloadPreferenceInput
  draft?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationCreatePerformanceArgs {
  data: MutationPerformanceInput
  draft?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationCreatePerformerArgs {
  data: MutationPerformerInput
  draft?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationCreateShowArgs {
  data: MutationShowInput
  draft?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationCreateSongArgs {
  data: MutationSongInput
  draft?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationCreateUserArgs {
  data: MutationUserInput
  draft?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationDeleteArtistArgs {
  id: Scalars['String']
}

export interface MutationDeleteMediaArgs {
  id: Scalars['String']
}

export interface MutationDeletePayloadPreferenceArgs {
  id: Scalars['String']
}

export interface MutationDeletePerformanceArgs {
  id: Scalars['String']
}

export interface MutationDeletePerformerArgs {
  id: Scalars['String']
}

export interface MutationDeleteShowArgs {
  id: Scalars['String']
}

export interface MutationDeleteSongArgs {
  id: Scalars['String']
}

export interface MutationDeleteUserArgs {
  id: Scalars['String']
}

export interface MutationForgotPasswordUserArgs {
  disableEmail?: InputMaybe<Scalars['Boolean']>
  email: Scalars['String']
  expiration?: InputMaybe<Scalars['Int']>
}

export interface MutationLoginUserArgs {
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}

export interface MutationRefreshTokenUserArgs {
  token?: InputMaybe<Scalars['String']>
}

export interface MutationResetPasswordUserArgs {
  password?: InputMaybe<Scalars['String']>
  token?: InputMaybe<Scalars['String']>
}

export interface MutationRestoreVersionArtistArgs {
  id?: InputMaybe<Scalars['String']>
}

export interface MutationRestoreVersionPerformanceArgs {
  id?: InputMaybe<Scalars['String']>
}

export interface MutationRestoreVersionPerformerArgs {
  id?: InputMaybe<Scalars['String']>
}

export interface MutationRestoreVersionSettingArgs {
  id?: InputMaybe<Scalars['String']>
}

export interface MutationRestoreVersionShowArgs {
  id?: InputMaybe<Scalars['String']>
}

export interface MutationRestoreVersionSongArgs {
  id?: InputMaybe<Scalars['String']>
}

export interface MutationUnlockUserArgs {
  email: Scalars['String']
}

export interface MutationUpdateArtistArgs {
  autosave?: InputMaybe<Scalars['Boolean']>
  data: MutationArtistUpdateInput
  draft?: InputMaybe<Scalars['Boolean']>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationUpdateMediaArgs {
  autosave?: InputMaybe<Scalars['Boolean']>
  data: MutationMediaUpdateInput
  draft?: InputMaybe<Scalars['Boolean']>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationUpdatePayloadPreferenceArgs {
  autosave?: InputMaybe<Scalars['Boolean']>
  data: MutationPayloadPreferenceUpdateInput
  draft?: InputMaybe<Scalars['Boolean']>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationUpdatePerformanceArgs {
  autosave?: InputMaybe<Scalars['Boolean']>
  data: MutationPerformanceUpdateInput
  draft?: InputMaybe<Scalars['Boolean']>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationUpdatePerformerArgs {
  autosave?: InputMaybe<Scalars['Boolean']>
  data: MutationPerformerUpdateInput
  draft?: InputMaybe<Scalars['Boolean']>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationUpdateSettingArgs {
  data: MutationSettingInput
  draft?: InputMaybe<Scalars['Boolean']>
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationUpdateShowArgs {
  autosave?: InputMaybe<Scalars['Boolean']>
  data: MutationShowUpdateInput
  draft?: InputMaybe<Scalars['Boolean']>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationUpdateSongArgs {
  autosave?: InputMaybe<Scalars['Boolean']>
  data: MutationSongUpdateInput
  draft?: InputMaybe<Scalars['Boolean']>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationUpdateUserArgs {
  autosave?: InputMaybe<Scalars['Boolean']>
  data: MutationUserUpdateInput
  draft?: InputMaybe<Scalars['Boolean']>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface MutationVerifyEmailUserArgs {
  token?: InputMaybe<Scalars['String']>
}

export interface PayloadPreference {
  __typename?: 'PayloadPreference'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user: PayloadPreference_User_Relationship
  value?: Maybe<Scalars['JSON']>
}

export interface PayloadPreferenceUserArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface PayloadPreferenceUpdate_UserRelationshipInput {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User

export interface PayloadPreference_UserRelationshipInput {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export interface PayloadPreference_User_Relationship {
  __typename?: 'PayloadPreference_User_Relationship'
  relationTo?: Maybe<PayloadPreference_User_RelationTo>
  value?: Maybe<PayloadPreference_User>
}

export interface PayloadPreference_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface PayloadPreference_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface PayloadPreference_Key_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface PayloadPreference_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface PayloadPreference_User_Relation {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export interface PayloadPreference_Value_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  intersects?: InputMaybe<Scalars['JSON']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
  within?: InputMaybe<Scalars['JSON']>
}

export interface PayloadPreference_Where {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>
  id?: InputMaybe<PayloadPreference_Id_Operator>
  key?: InputMaybe<PayloadPreference_Key_Operator>
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>
  user?: InputMaybe<PayloadPreference_User_Relation>
  value?: InputMaybe<PayloadPreference_Value_Operator>
}

export interface PayloadPreference_Where_And {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>
  id?: InputMaybe<PayloadPreference_Id_Operator>
  key?: InputMaybe<PayloadPreference_Key_Operator>
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>
  user?: InputMaybe<PayloadPreference_User_Relation>
  value?: InputMaybe<PayloadPreference_Value_Operator>
}

export interface PayloadPreference_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>
  id?: InputMaybe<PayloadPreference_Id_Operator>
  key?: InputMaybe<PayloadPreference_Key_Operator>
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>
  user?: InputMaybe<PayloadPreference_User_Relation>
  value?: InputMaybe<PayloadPreference_Value_Operator>
}

export interface PayloadPreferences {
  __typename?: 'PayloadPreferences'
  docs?: Maybe<Array<Maybe<PayloadPreference>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface PayloadPreferencesCreateAccess {
  __typename?: 'PayloadPreferencesCreateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PayloadPreferencesCreateDocAccess {
  __typename?: 'PayloadPreferencesCreateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PayloadPreferencesDeleteAccess {
  __typename?: 'PayloadPreferencesDeleteAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PayloadPreferencesDeleteDocAccess {
  __typename?: 'PayloadPreferencesDeleteDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PayloadPreferencesDocAccessFields {
  __typename?: 'PayloadPreferencesDocAccessFields'
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>
  user?: Maybe<PayloadPreferencesDocAccessFields_User>
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>
}

export interface PayloadPreferencesDocAccessFields_CreatedAt {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt'
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>
}

export interface PayloadPreferencesDocAccessFields_CreatedAt_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_CreatedAt_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_CreatedAt_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_CreatedAt_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_Key {
  __typename?: 'PayloadPreferencesDocAccessFields_key'
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>
}

export interface PayloadPreferencesDocAccessFields_Key_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_Key_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_Key_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_Key_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_UpdatedAt {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt'
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>
}

export interface PayloadPreferencesDocAccessFields_UpdatedAt_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_UpdatedAt_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_UpdatedAt_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_UpdatedAt_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_User {
  __typename?: 'PayloadPreferencesDocAccessFields_user'
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>
}

export interface PayloadPreferencesDocAccessFields_User_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_User_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_User_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_User_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_Value {
  __typename?: 'PayloadPreferencesDocAccessFields_value'
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>
}

export interface PayloadPreferencesDocAccessFields_Value_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_Value_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_Value_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesDocAccessFields_Value_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields {
  __typename?: 'PayloadPreferencesFields'
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>
  key?: Maybe<PayloadPreferencesFields_Key>
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>
  user?: Maybe<PayloadPreferencesFields_User>
  value?: Maybe<PayloadPreferencesFields_Value>
}

export interface PayloadPreferencesFields_CreatedAt {
  __typename?: 'PayloadPreferencesFields_createdAt'
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>
}

export interface PayloadPreferencesFields_CreatedAt_Create {
  __typename?: 'PayloadPreferencesFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_CreatedAt_Delete {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_CreatedAt_Read {
  __typename?: 'PayloadPreferencesFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_CreatedAt_Update {
  __typename?: 'PayloadPreferencesFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_Key {
  __typename?: 'PayloadPreferencesFields_key'
  create?: Maybe<PayloadPreferencesFields_Key_Create>
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>
  read?: Maybe<PayloadPreferencesFields_Key_Read>
  update?: Maybe<PayloadPreferencesFields_Key_Update>
}

export interface PayloadPreferencesFields_Key_Create {
  __typename?: 'PayloadPreferencesFields_key_Create'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_Key_Delete {
  __typename?: 'PayloadPreferencesFields_key_Delete'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_Key_Read {
  __typename?: 'PayloadPreferencesFields_key_Read'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_Key_Update {
  __typename?: 'PayloadPreferencesFields_key_Update'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_UpdatedAt {
  __typename?: 'PayloadPreferencesFields_updatedAt'
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>
}

export interface PayloadPreferencesFields_UpdatedAt_Create {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_UpdatedAt_Delete {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_UpdatedAt_Read {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_UpdatedAt_Update {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_User {
  __typename?: 'PayloadPreferencesFields_user'
  create?: Maybe<PayloadPreferencesFields_User_Create>
  delete?: Maybe<PayloadPreferencesFields_User_Delete>
  read?: Maybe<PayloadPreferencesFields_User_Read>
  update?: Maybe<PayloadPreferencesFields_User_Update>
}

export interface PayloadPreferencesFields_User_Create {
  __typename?: 'PayloadPreferencesFields_user_Create'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_User_Delete {
  __typename?: 'PayloadPreferencesFields_user_Delete'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_User_Read {
  __typename?: 'PayloadPreferencesFields_user_Read'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_User_Update {
  __typename?: 'PayloadPreferencesFields_user_Update'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_Value {
  __typename?: 'PayloadPreferencesFields_value'
  create?: Maybe<PayloadPreferencesFields_Value_Create>
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>
  read?: Maybe<PayloadPreferencesFields_Value_Read>
  update?: Maybe<PayloadPreferencesFields_Value_Update>
}

export interface PayloadPreferencesFields_Value_Create {
  __typename?: 'PayloadPreferencesFields_value_Create'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_Value_Delete {
  __typename?: 'PayloadPreferencesFields_value_Delete'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_Value_Read {
  __typename?: 'PayloadPreferencesFields_value_Read'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesFields_Value_Update {
  __typename?: 'PayloadPreferencesFields_value_Update'
  permission: Scalars['Boolean']
}

export interface PayloadPreferencesReadAccess {
  __typename?: 'PayloadPreferencesReadAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PayloadPreferencesReadDocAccess {
  __typename?: 'PayloadPreferencesReadDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PayloadPreferencesUpdateAccess {
  __typename?: 'PayloadPreferencesUpdateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PayloadPreferencesUpdateDocAccess {
  __typename?: 'PayloadPreferencesUpdateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface Performance {
  __typename?: 'Performance'
  _status?: Maybe<Performance__Status>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['JSON']>
  id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface PerformanceDescriptionArgs {
  depth?: InputMaybe<Scalars['Int']>
}

export enum PerformanceUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export interface PerformanceVersion {
  __typename?: 'PerformanceVersion'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  latest?: Maybe<Scalars['Boolean']>
  parent?: Maybe<Performance>
  updatedAt?: Maybe<Scalars['DateTime']>
  version?: Maybe<PerformanceVersion_Version>
}

export interface PerformanceVersionParentArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface PerformanceVersion_Version {
  __typename?: 'PerformanceVersion_Version'
  _status?: Maybe<PerformanceVersion_Version__Status>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['JSON']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface PerformanceVersion_VersionDescriptionArgs {
  depth?: InputMaybe<Scalars['Int']>
}

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

export interface Performance__Status_Operator {
  all?: InputMaybe<Array<InputMaybe<Performance__Status_Input>>>
  equals?: InputMaybe<Performance__Status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Performance__Status_Input>>>
  not_equals?: InputMaybe<Performance__Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<Performance__Status_Input>>>
}

export interface Performance_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Performance_Description_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
}

export interface Performance_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Performance_Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Performance_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Performance_Where {
  AND?: InputMaybe<Array<InputMaybe<Performance_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Performance_Where_Or>>>
  _status?: InputMaybe<Performance__Status_Operator>
  createdAt?: InputMaybe<Performance_CreatedAt_Operator>
  description?: InputMaybe<Performance_Description_Operator>
  id?: InputMaybe<Performance_Id_Operator>
  title?: InputMaybe<Performance_Title_Operator>
  updatedAt?: InputMaybe<Performance_UpdatedAt_Operator>
}

export interface Performance_Where_And {
  AND?: InputMaybe<Array<InputMaybe<Performance_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Performance_Where_Or>>>
  _status?: InputMaybe<Performance__Status_Operator>
  createdAt?: InputMaybe<Performance_CreatedAt_Operator>
  description?: InputMaybe<Performance_Description_Operator>
  id?: InputMaybe<Performance_Id_Operator>
  title?: InputMaybe<Performance_Title_Operator>
  updatedAt?: InputMaybe<Performance_UpdatedAt_Operator>
}

export interface Performance_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<Performance_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Performance_Where_Or>>>
  _status?: InputMaybe<Performance__Status_Operator>
  createdAt?: InputMaybe<Performance_CreatedAt_Operator>
  description?: InputMaybe<Performance_Description_Operator>
  id?: InputMaybe<Performance_Id_Operator>
  title?: InputMaybe<Performance_Title_Operator>
  updatedAt?: InputMaybe<Performance_UpdatedAt_Operator>
}

export interface Performances {
  __typename?: 'Performances'
  docs?: Maybe<Array<Maybe<Performance>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface PerformancesCreateAccess {
  __typename?: 'PerformancesCreateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformancesCreateDocAccess {
  __typename?: 'PerformancesCreateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformancesDeleteAccess {
  __typename?: 'PerformancesDeleteAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformancesDeleteDocAccess {
  __typename?: 'PerformancesDeleteDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformancesDocAccessFields {
  __typename?: 'PerformancesDocAccessFields'
  _status?: Maybe<PerformancesDocAccessFields__Status>
  createdAt?: Maybe<PerformancesDocAccessFields_CreatedAt>
  description?: Maybe<PerformancesDocAccessFields_Description>
  title?: Maybe<PerformancesDocAccessFields_Title>
  updatedAt?: Maybe<PerformancesDocAccessFields_UpdatedAt>
}

export interface PerformancesDocAccessFields__Status {
  __typename?: 'PerformancesDocAccessFields__status'
  create?: Maybe<PerformancesDocAccessFields__Status_Create>
  delete?: Maybe<PerformancesDocAccessFields__Status_Delete>
  read?: Maybe<PerformancesDocAccessFields__Status_Read>
  update?: Maybe<PerformancesDocAccessFields__Status_Update>
}

export interface PerformancesDocAccessFields__Status_Create {
  __typename?: 'PerformancesDocAccessFields__status_Create'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields__Status_Delete {
  __typename?: 'PerformancesDocAccessFields__status_Delete'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields__Status_Read {
  __typename?: 'PerformancesDocAccessFields__status_Read'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields__Status_Update {
  __typename?: 'PerformancesDocAccessFields__status_Update'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_CreatedAt {
  __typename?: 'PerformancesDocAccessFields_createdAt'
  create?: Maybe<PerformancesDocAccessFields_CreatedAt_Create>
  delete?: Maybe<PerformancesDocAccessFields_CreatedAt_Delete>
  read?: Maybe<PerformancesDocAccessFields_CreatedAt_Read>
  update?: Maybe<PerformancesDocAccessFields_CreatedAt_Update>
}

export interface PerformancesDocAccessFields_CreatedAt_Create {
  __typename?: 'PerformancesDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_CreatedAt_Delete {
  __typename?: 'PerformancesDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_CreatedAt_Read {
  __typename?: 'PerformancesDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_CreatedAt_Update {
  __typename?: 'PerformancesDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_Description {
  __typename?: 'PerformancesDocAccessFields_description'
  create?: Maybe<PerformancesDocAccessFields_Description_Create>
  delete?: Maybe<PerformancesDocAccessFields_Description_Delete>
  read?: Maybe<PerformancesDocAccessFields_Description_Read>
  update?: Maybe<PerformancesDocAccessFields_Description_Update>
}

export interface PerformancesDocAccessFields_Description_Create {
  __typename?: 'PerformancesDocAccessFields_description_Create'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_Description_Delete {
  __typename?: 'PerformancesDocAccessFields_description_Delete'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_Description_Read {
  __typename?: 'PerformancesDocAccessFields_description_Read'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_Description_Update {
  __typename?: 'PerformancesDocAccessFields_description_Update'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_Title {
  __typename?: 'PerformancesDocAccessFields_title'
  create?: Maybe<PerformancesDocAccessFields_Title_Create>
  delete?: Maybe<PerformancesDocAccessFields_Title_Delete>
  read?: Maybe<PerformancesDocAccessFields_Title_Read>
  update?: Maybe<PerformancesDocAccessFields_Title_Update>
}

export interface PerformancesDocAccessFields_Title_Create {
  __typename?: 'PerformancesDocAccessFields_title_Create'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_Title_Delete {
  __typename?: 'PerformancesDocAccessFields_title_Delete'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_Title_Read {
  __typename?: 'PerformancesDocAccessFields_title_Read'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_Title_Update {
  __typename?: 'PerformancesDocAccessFields_title_Update'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_UpdatedAt {
  __typename?: 'PerformancesDocAccessFields_updatedAt'
  create?: Maybe<PerformancesDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<PerformancesDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<PerformancesDocAccessFields_UpdatedAt_Read>
  update?: Maybe<PerformancesDocAccessFields_UpdatedAt_Update>
}

export interface PerformancesDocAccessFields_UpdatedAt_Create {
  __typename?: 'PerformancesDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_UpdatedAt_Delete {
  __typename?: 'PerformancesDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_UpdatedAt_Read {
  __typename?: 'PerformancesDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface PerformancesDocAccessFields_UpdatedAt_Update {
  __typename?: 'PerformancesDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface PerformancesFields {
  __typename?: 'PerformancesFields'
  _status?: Maybe<PerformancesFields__Status>
  createdAt?: Maybe<PerformancesFields_CreatedAt>
  description?: Maybe<PerformancesFields_Description>
  title?: Maybe<PerformancesFields_Title>
  updatedAt?: Maybe<PerformancesFields_UpdatedAt>
}

export interface PerformancesFields__Status {
  __typename?: 'PerformancesFields__status'
  create?: Maybe<PerformancesFields__Status_Create>
  delete?: Maybe<PerformancesFields__Status_Delete>
  read?: Maybe<PerformancesFields__Status_Read>
  update?: Maybe<PerformancesFields__Status_Update>
}

export interface PerformancesFields__Status_Create {
  __typename?: 'PerformancesFields__status_Create'
  permission: Scalars['Boolean']
}

export interface PerformancesFields__Status_Delete {
  __typename?: 'PerformancesFields__status_Delete'
  permission: Scalars['Boolean']
}

export interface PerformancesFields__Status_Read {
  __typename?: 'PerformancesFields__status_Read'
  permission: Scalars['Boolean']
}

export interface PerformancesFields__Status_Update {
  __typename?: 'PerformancesFields__status_Update'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_CreatedAt {
  __typename?: 'PerformancesFields_createdAt'
  create?: Maybe<PerformancesFields_CreatedAt_Create>
  delete?: Maybe<PerformancesFields_CreatedAt_Delete>
  read?: Maybe<PerformancesFields_CreatedAt_Read>
  update?: Maybe<PerformancesFields_CreatedAt_Update>
}

export interface PerformancesFields_CreatedAt_Create {
  __typename?: 'PerformancesFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_CreatedAt_Delete {
  __typename?: 'PerformancesFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_CreatedAt_Read {
  __typename?: 'PerformancesFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_CreatedAt_Update {
  __typename?: 'PerformancesFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_Description {
  __typename?: 'PerformancesFields_description'
  create?: Maybe<PerformancesFields_Description_Create>
  delete?: Maybe<PerformancesFields_Description_Delete>
  read?: Maybe<PerformancesFields_Description_Read>
  update?: Maybe<PerformancesFields_Description_Update>
}

export interface PerformancesFields_Description_Create {
  __typename?: 'PerformancesFields_description_Create'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_Description_Delete {
  __typename?: 'PerformancesFields_description_Delete'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_Description_Read {
  __typename?: 'PerformancesFields_description_Read'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_Description_Update {
  __typename?: 'PerformancesFields_description_Update'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_Title {
  __typename?: 'PerformancesFields_title'
  create?: Maybe<PerformancesFields_Title_Create>
  delete?: Maybe<PerformancesFields_Title_Delete>
  read?: Maybe<PerformancesFields_Title_Read>
  update?: Maybe<PerformancesFields_Title_Update>
}

export interface PerformancesFields_Title_Create {
  __typename?: 'PerformancesFields_title_Create'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_Title_Delete {
  __typename?: 'PerformancesFields_title_Delete'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_Title_Read {
  __typename?: 'PerformancesFields_title_Read'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_Title_Update {
  __typename?: 'PerformancesFields_title_Update'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_UpdatedAt {
  __typename?: 'PerformancesFields_updatedAt'
  create?: Maybe<PerformancesFields_UpdatedAt_Create>
  delete?: Maybe<PerformancesFields_UpdatedAt_Delete>
  read?: Maybe<PerformancesFields_UpdatedAt_Read>
  update?: Maybe<PerformancesFields_UpdatedAt_Update>
}

export interface PerformancesFields_UpdatedAt_Create {
  __typename?: 'PerformancesFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_UpdatedAt_Delete {
  __typename?: 'PerformancesFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_UpdatedAt_Read {
  __typename?: 'PerformancesFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface PerformancesFields_UpdatedAt_Update {
  __typename?: 'PerformancesFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface PerformancesReadAccess {
  __typename?: 'PerformancesReadAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformancesReadDocAccess {
  __typename?: 'PerformancesReadDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformancesReadVersionsAccess {
  __typename?: 'PerformancesReadVersionsAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformancesReadVersionsDocAccess {
  __typename?: 'PerformancesReadVersionsDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformancesUpdateAccess {
  __typename?: 'PerformancesUpdateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformancesUpdateDocAccess {
  __typename?: 'PerformancesUpdateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface Performer {
  __typename?: 'Performer'
  _status?: Maybe<Performer__Status>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['JSON']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<Media>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface PerformerDescriptionArgs {
  depth?: InputMaybe<Scalars['Int']>
}

export interface PerformerImageArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
  where?: InputMaybe<Performer_Image_Where>
}

export enum PerformerUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export interface PerformerVersion {
  __typename?: 'PerformerVersion'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  latest?: Maybe<Scalars['Boolean']>
  parent?: Maybe<Performer>
  updatedAt?: Maybe<Scalars['DateTime']>
  version?: Maybe<PerformerVersion_Version>
}

export interface PerformerVersionParentArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface PerformerVersion_Version {
  __typename?: 'PerformerVersion_Version'
  _status?: Maybe<PerformerVersion_Version__Status>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['JSON']>
  image?: Maybe<Media>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface PerformerVersion_VersionDescriptionArgs {
  depth?: InputMaybe<Scalars['Int']>
}

export interface PerformerVersion_VersionImageArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
  where?: InputMaybe<PerformerVersion_Version_Image_Where>
}

export interface PerformerVersion_Version_Image_Alt_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface PerformerVersion_Version_Image_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface PerformerVersion_Version_Image_Filename_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface PerformerVersion_Version_Image_Filesize_Operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface PerformerVersion_Version_Image_Height_Operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface PerformerVersion_Version_Image_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface PerformerVersion_Version_Image_MimeType_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface PerformerVersion_Version_Image_Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface PerformerVersion_Version_Image_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface PerformerVersion_Version_Image_Url_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface PerformerVersion_Version_Image_Where {
  AND?: InputMaybe<Array<InputMaybe<PerformerVersion_Version_Image_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PerformerVersion_Version_Image_Where_Or>>>
  alt?: InputMaybe<PerformerVersion_Version_Image_Alt_Operator>
  createdAt?: InputMaybe<PerformerVersion_Version_Image_CreatedAt_Operator>
  filename?: InputMaybe<PerformerVersion_Version_Image_Filename_Operator>
  filesize?: InputMaybe<PerformerVersion_Version_Image_Filesize_Operator>
  height?: InputMaybe<PerformerVersion_Version_Image_Height_Operator>
  id?: InputMaybe<PerformerVersion_Version_Image_Id_Operator>
  mimeType?: InputMaybe<PerformerVersion_Version_Image_MimeType_Operator>
  title?: InputMaybe<PerformerVersion_Version_Image_Title_Operator>
  updatedAt?: InputMaybe<PerformerVersion_Version_Image_UpdatedAt_Operator>
  url?: InputMaybe<PerformerVersion_Version_Image_Url_Operator>
  width?: InputMaybe<PerformerVersion_Version_Image_Width_Operator>
}

export interface PerformerVersion_Version_Image_Where_And {
  AND?: InputMaybe<Array<InputMaybe<PerformerVersion_Version_Image_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PerformerVersion_Version_Image_Where_Or>>>
  alt?: InputMaybe<PerformerVersion_Version_Image_Alt_Operator>
  createdAt?: InputMaybe<PerformerVersion_Version_Image_CreatedAt_Operator>
  filename?: InputMaybe<PerformerVersion_Version_Image_Filename_Operator>
  filesize?: InputMaybe<PerformerVersion_Version_Image_Filesize_Operator>
  height?: InputMaybe<PerformerVersion_Version_Image_Height_Operator>
  id?: InputMaybe<PerformerVersion_Version_Image_Id_Operator>
  mimeType?: InputMaybe<PerformerVersion_Version_Image_MimeType_Operator>
  title?: InputMaybe<PerformerVersion_Version_Image_Title_Operator>
  updatedAt?: InputMaybe<PerformerVersion_Version_Image_UpdatedAt_Operator>
  url?: InputMaybe<PerformerVersion_Version_Image_Url_Operator>
  width?: InputMaybe<PerformerVersion_Version_Image_Width_Operator>
}

export interface PerformerVersion_Version_Image_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<PerformerVersion_Version_Image_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PerformerVersion_Version_Image_Where_Or>>>
  alt?: InputMaybe<PerformerVersion_Version_Image_Alt_Operator>
  createdAt?: InputMaybe<PerformerVersion_Version_Image_CreatedAt_Operator>
  filename?: InputMaybe<PerformerVersion_Version_Image_Filename_Operator>
  filesize?: InputMaybe<PerformerVersion_Version_Image_Filesize_Operator>
  height?: InputMaybe<PerformerVersion_Version_Image_Height_Operator>
  id?: InputMaybe<PerformerVersion_Version_Image_Id_Operator>
  mimeType?: InputMaybe<PerformerVersion_Version_Image_MimeType_Operator>
  title?: InputMaybe<PerformerVersion_Version_Image_Title_Operator>
  updatedAt?: InputMaybe<PerformerVersion_Version_Image_UpdatedAt_Operator>
  url?: InputMaybe<PerformerVersion_Version_Image_Url_Operator>
  width?: InputMaybe<PerformerVersion_Version_Image_Width_Operator>
}

export interface PerformerVersion_Version_Image_Width_Operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export enum PerformerVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export interface Performer_Image_Alt_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Performer_Image_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Performer_Image_Filename_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Performer_Image_Filesize_Operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Performer_Image_Height_Operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

export interface Performer_Image_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Performer_Image_MimeType_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Performer_Image_Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Performer_Image_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Performer_Image_Url_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Performer_Image_Where {
  AND?: InputMaybe<Array<InputMaybe<Performer_Image_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Performer_Image_Where_Or>>>
  alt?: InputMaybe<Performer_Image_Alt_Operator>
  createdAt?: InputMaybe<Performer_Image_CreatedAt_Operator>
  filename?: InputMaybe<Performer_Image_Filename_Operator>
  filesize?: InputMaybe<Performer_Image_Filesize_Operator>
  height?: InputMaybe<Performer_Image_Height_Operator>
  id?: InputMaybe<Performer_Image_Id_Operator>
  mimeType?: InputMaybe<Performer_Image_MimeType_Operator>
  title?: InputMaybe<Performer_Image_Title_Operator>
  updatedAt?: InputMaybe<Performer_Image_UpdatedAt_Operator>
  url?: InputMaybe<Performer_Image_Url_Operator>
  width?: InputMaybe<Performer_Image_Width_Operator>
}

export interface Performer_Image_Where_And {
  AND?: InputMaybe<Array<InputMaybe<Performer_Image_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Performer_Image_Where_Or>>>
  alt?: InputMaybe<Performer_Image_Alt_Operator>
  createdAt?: InputMaybe<Performer_Image_CreatedAt_Operator>
  filename?: InputMaybe<Performer_Image_Filename_Operator>
  filesize?: InputMaybe<Performer_Image_Filesize_Operator>
  height?: InputMaybe<Performer_Image_Height_Operator>
  id?: InputMaybe<Performer_Image_Id_Operator>
  mimeType?: InputMaybe<Performer_Image_MimeType_Operator>
  title?: InputMaybe<Performer_Image_Title_Operator>
  updatedAt?: InputMaybe<Performer_Image_UpdatedAt_Operator>
  url?: InputMaybe<Performer_Image_Url_Operator>
  width?: InputMaybe<Performer_Image_Width_Operator>
}

export interface Performer_Image_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<Performer_Image_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Performer_Image_Where_Or>>>
  alt?: InputMaybe<Performer_Image_Alt_Operator>
  createdAt?: InputMaybe<Performer_Image_CreatedAt_Operator>
  filename?: InputMaybe<Performer_Image_Filename_Operator>
  filesize?: InputMaybe<Performer_Image_Filesize_Operator>
  height?: InputMaybe<Performer_Image_Height_Operator>
  id?: InputMaybe<Performer_Image_Id_Operator>
  mimeType?: InputMaybe<Performer_Image_MimeType_Operator>
  title?: InputMaybe<Performer_Image_Title_Operator>
  updatedAt?: InputMaybe<Performer_Image_UpdatedAt_Operator>
  url?: InputMaybe<Performer_Image_Url_Operator>
  width?: InputMaybe<Performer_Image_Width_Operator>
}

export interface Performer_Image_Width_Operator {
  equals?: InputMaybe<Scalars['Float']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['Float']>
  greater_than_equal?: InputMaybe<Scalars['Float']>
  less_than?: InputMaybe<Scalars['Float']>
  less_than_equal?: InputMaybe<Scalars['Float']>
  not_equals?: InputMaybe<Scalars['Float']>
}

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

export interface Performer__Status_Operator {
  all?: InputMaybe<Array<InputMaybe<Performer__Status_Input>>>
  equals?: InputMaybe<Performer__Status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Performer__Status_Input>>>
  not_equals?: InputMaybe<Performer__Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<Performer__Status_Input>>>
}

export interface Performer_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Performer_Description_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
}

export interface Performer_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Performer_Image_Operator {
  equals?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
}

export interface Performer_Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Performer_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Performer_Where {
  AND?: InputMaybe<Array<InputMaybe<Performer_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Performer_Where_Or>>>
  _status?: InputMaybe<Performer__Status_Operator>
  createdAt?: InputMaybe<Performer_CreatedAt_Operator>
  description?: InputMaybe<Performer_Description_Operator>
  id?: InputMaybe<Performer_Id_Operator>
  image?: InputMaybe<Performer_Image_Operator>
  title?: InputMaybe<Performer_Title_Operator>
  updatedAt?: InputMaybe<Performer_UpdatedAt_Operator>
}

export interface Performer_Where_And {
  AND?: InputMaybe<Array<InputMaybe<Performer_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Performer_Where_Or>>>
  _status?: InputMaybe<Performer__Status_Operator>
  createdAt?: InputMaybe<Performer_CreatedAt_Operator>
  description?: InputMaybe<Performer_Description_Operator>
  id?: InputMaybe<Performer_Id_Operator>
  image?: InputMaybe<Performer_Image_Operator>
  title?: InputMaybe<Performer_Title_Operator>
  updatedAt?: InputMaybe<Performer_UpdatedAt_Operator>
}

export interface Performer_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<Performer_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Performer_Where_Or>>>
  _status?: InputMaybe<Performer__Status_Operator>
  createdAt?: InputMaybe<Performer_CreatedAt_Operator>
  description?: InputMaybe<Performer_Description_Operator>
  id?: InputMaybe<Performer_Id_Operator>
  image?: InputMaybe<Performer_Image_Operator>
  title?: InputMaybe<Performer_Title_Operator>
  updatedAt?: InputMaybe<Performer_UpdatedAt_Operator>
}

export interface Performers {
  __typename?: 'Performers'
  docs?: Maybe<Array<Maybe<Performer>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface PerformersCreateAccess {
  __typename?: 'PerformersCreateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformersCreateDocAccess {
  __typename?: 'PerformersCreateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformersDeleteAccess {
  __typename?: 'PerformersDeleteAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformersDeleteDocAccess {
  __typename?: 'PerformersDeleteDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformersDocAccessFields {
  __typename?: 'PerformersDocAccessFields'
  _status?: Maybe<PerformersDocAccessFields__Status>
  createdAt?: Maybe<PerformersDocAccessFields_CreatedAt>
  description?: Maybe<PerformersDocAccessFields_Description>
  image?: Maybe<PerformersDocAccessFields_Image>
  title?: Maybe<PerformersDocAccessFields_Title>
  updatedAt?: Maybe<PerformersDocAccessFields_UpdatedAt>
}

export interface PerformersDocAccessFields__Status {
  __typename?: 'PerformersDocAccessFields__status'
  create?: Maybe<PerformersDocAccessFields__Status_Create>
  delete?: Maybe<PerformersDocAccessFields__Status_Delete>
  read?: Maybe<PerformersDocAccessFields__Status_Read>
  update?: Maybe<PerformersDocAccessFields__Status_Update>
}

export interface PerformersDocAccessFields__Status_Create {
  __typename?: 'PerformersDocAccessFields__status_Create'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields__Status_Delete {
  __typename?: 'PerformersDocAccessFields__status_Delete'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields__Status_Read {
  __typename?: 'PerformersDocAccessFields__status_Read'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields__Status_Update {
  __typename?: 'PerformersDocAccessFields__status_Update'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_CreatedAt {
  __typename?: 'PerformersDocAccessFields_createdAt'
  create?: Maybe<PerformersDocAccessFields_CreatedAt_Create>
  delete?: Maybe<PerformersDocAccessFields_CreatedAt_Delete>
  read?: Maybe<PerformersDocAccessFields_CreatedAt_Read>
  update?: Maybe<PerformersDocAccessFields_CreatedAt_Update>
}

export interface PerformersDocAccessFields_CreatedAt_Create {
  __typename?: 'PerformersDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_CreatedAt_Delete {
  __typename?: 'PerformersDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_CreatedAt_Read {
  __typename?: 'PerformersDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_CreatedAt_Update {
  __typename?: 'PerformersDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_Description {
  __typename?: 'PerformersDocAccessFields_description'
  create?: Maybe<PerformersDocAccessFields_Description_Create>
  delete?: Maybe<PerformersDocAccessFields_Description_Delete>
  read?: Maybe<PerformersDocAccessFields_Description_Read>
  update?: Maybe<PerformersDocAccessFields_Description_Update>
}

export interface PerformersDocAccessFields_Description_Create {
  __typename?: 'PerformersDocAccessFields_description_Create'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_Description_Delete {
  __typename?: 'PerformersDocAccessFields_description_Delete'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_Description_Read {
  __typename?: 'PerformersDocAccessFields_description_Read'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_Description_Update {
  __typename?: 'PerformersDocAccessFields_description_Update'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_Image {
  __typename?: 'PerformersDocAccessFields_image'
  create?: Maybe<PerformersDocAccessFields_Image_Create>
  delete?: Maybe<PerformersDocAccessFields_Image_Delete>
  read?: Maybe<PerformersDocAccessFields_Image_Read>
  update?: Maybe<PerformersDocAccessFields_Image_Update>
}

export interface PerformersDocAccessFields_Image_Create {
  __typename?: 'PerformersDocAccessFields_image_Create'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_Image_Delete {
  __typename?: 'PerformersDocAccessFields_image_Delete'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_Image_Read {
  __typename?: 'PerformersDocAccessFields_image_Read'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_Image_Update {
  __typename?: 'PerformersDocAccessFields_image_Update'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_Title {
  __typename?: 'PerformersDocAccessFields_title'
  create?: Maybe<PerformersDocAccessFields_Title_Create>
  delete?: Maybe<PerformersDocAccessFields_Title_Delete>
  read?: Maybe<PerformersDocAccessFields_Title_Read>
  update?: Maybe<PerformersDocAccessFields_Title_Update>
}

export interface PerformersDocAccessFields_Title_Create {
  __typename?: 'PerformersDocAccessFields_title_Create'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_Title_Delete {
  __typename?: 'PerformersDocAccessFields_title_Delete'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_Title_Read {
  __typename?: 'PerformersDocAccessFields_title_Read'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_Title_Update {
  __typename?: 'PerformersDocAccessFields_title_Update'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_UpdatedAt {
  __typename?: 'PerformersDocAccessFields_updatedAt'
  create?: Maybe<PerformersDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<PerformersDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<PerformersDocAccessFields_UpdatedAt_Read>
  update?: Maybe<PerformersDocAccessFields_UpdatedAt_Update>
}

export interface PerformersDocAccessFields_UpdatedAt_Create {
  __typename?: 'PerformersDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_UpdatedAt_Delete {
  __typename?: 'PerformersDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_UpdatedAt_Read {
  __typename?: 'PerformersDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface PerformersDocAccessFields_UpdatedAt_Update {
  __typename?: 'PerformersDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface PerformersFields {
  __typename?: 'PerformersFields'
  _status?: Maybe<PerformersFields__Status>
  createdAt?: Maybe<PerformersFields_CreatedAt>
  description?: Maybe<PerformersFields_Description>
  image?: Maybe<PerformersFields_Image>
  title?: Maybe<PerformersFields_Title>
  updatedAt?: Maybe<PerformersFields_UpdatedAt>
}

export interface PerformersFields__Status {
  __typename?: 'PerformersFields__status'
  create?: Maybe<PerformersFields__Status_Create>
  delete?: Maybe<PerformersFields__Status_Delete>
  read?: Maybe<PerformersFields__Status_Read>
  update?: Maybe<PerformersFields__Status_Update>
}

export interface PerformersFields__Status_Create {
  __typename?: 'PerformersFields__status_Create'
  permission: Scalars['Boolean']
}

export interface PerformersFields__Status_Delete {
  __typename?: 'PerformersFields__status_Delete'
  permission: Scalars['Boolean']
}

export interface PerformersFields__Status_Read {
  __typename?: 'PerformersFields__status_Read'
  permission: Scalars['Boolean']
}

export interface PerformersFields__Status_Update {
  __typename?: 'PerformersFields__status_Update'
  permission: Scalars['Boolean']
}

export interface PerformersFields_CreatedAt {
  __typename?: 'PerformersFields_createdAt'
  create?: Maybe<PerformersFields_CreatedAt_Create>
  delete?: Maybe<PerformersFields_CreatedAt_Delete>
  read?: Maybe<PerformersFields_CreatedAt_Read>
  update?: Maybe<PerformersFields_CreatedAt_Update>
}

export interface PerformersFields_CreatedAt_Create {
  __typename?: 'PerformersFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface PerformersFields_CreatedAt_Delete {
  __typename?: 'PerformersFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface PerformersFields_CreatedAt_Read {
  __typename?: 'PerformersFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface PerformersFields_CreatedAt_Update {
  __typename?: 'PerformersFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface PerformersFields_Description {
  __typename?: 'PerformersFields_description'
  create?: Maybe<PerformersFields_Description_Create>
  delete?: Maybe<PerformersFields_Description_Delete>
  read?: Maybe<PerformersFields_Description_Read>
  update?: Maybe<PerformersFields_Description_Update>
}

export interface PerformersFields_Description_Create {
  __typename?: 'PerformersFields_description_Create'
  permission: Scalars['Boolean']
}

export interface PerformersFields_Description_Delete {
  __typename?: 'PerformersFields_description_Delete'
  permission: Scalars['Boolean']
}

export interface PerformersFields_Description_Read {
  __typename?: 'PerformersFields_description_Read'
  permission: Scalars['Boolean']
}

export interface PerformersFields_Description_Update {
  __typename?: 'PerformersFields_description_Update'
  permission: Scalars['Boolean']
}

export interface PerformersFields_Image {
  __typename?: 'PerformersFields_image'
  create?: Maybe<PerformersFields_Image_Create>
  delete?: Maybe<PerformersFields_Image_Delete>
  read?: Maybe<PerformersFields_Image_Read>
  update?: Maybe<PerformersFields_Image_Update>
}

export interface PerformersFields_Image_Create {
  __typename?: 'PerformersFields_image_Create'
  permission: Scalars['Boolean']
}

export interface PerformersFields_Image_Delete {
  __typename?: 'PerformersFields_image_Delete'
  permission: Scalars['Boolean']
}

export interface PerformersFields_Image_Read {
  __typename?: 'PerformersFields_image_Read'
  permission: Scalars['Boolean']
}

export interface PerformersFields_Image_Update {
  __typename?: 'PerformersFields_image_Update'
  permission: Scalars['Boolean']
}

export interface PerformersFields_Title {
  __typename?: 'PerformersFields_title'
  create?: Maybe<PerformersFields_Title_Create>
  delete?: Maybe<PerformersFields_Title_Delete>
  read?: Maybe<PerformersFields_Title_Read>
  update?: Maybe<PerformersFields_Title_Update>
}

export interface PerformersFields_Title_Create {
  __typename?: 'PerformersFields_title_Create'
  permission: Scalars['Boolean']
}

export interface PerformersFields_Title_Delete {
  __typename?: 'PerformersFields_title_Delete'
  permission: Scalars['Boolean']
}

export interface PerformersFields_Title_Read {
  __typename?: 'PerformersFields_title_Read'
  permission: Scalars['Boolean']
}

export interface PerformersFields_Title_Update {
  __typename?: 'PerformersFields_title_Update'
  permission: Scalars['Boolean']
}

export interface PerformersFields_UpdatedAt {
  __typename?: 'PerformersFields_updatedAt'
  create?: Maybe<PerformersFields_UpdatedAt_Create>
  delete?: Maybe<PerformersFields_UpdatedAt_Delete>
  read?: Maybe<PerformersFields_UpdatedAt_Read>
  update?: Maybe<PerformersFields_UpdatedAt_Update>
}

export interface PerformersFields_UpdatedAt_Create {
  __typename?: 'PerformersFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface PerformersFields_UpdatedAt_Delete {
  __typename?: 'PerformersFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface PerformersFields_UpdatedAt_Read {
  __typename?: 'PerformersFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface PerformersFields_UpdatedAt_Update {
  __typename?: 'PerformersFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface PerformersReadAccess {
  __typename?: 'PerformersReadAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformersReadDocAccess {
  __typename?: 'PerformersReadDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformersReadVersionsAccess {
  __typename?: 'PerformersReadVersionsAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformersReadVersionsDocAccess {
  __typename?: 'PerformersReadVersionsDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformersUpdateAccess {
  __typename?: 'PerformersUpdateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface PerformersUpdateDocAccess {
  __typename?: 'PerformersUpdateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface Query {
  __typename?: 'Query'
  Access?: Maybe<Access>
  Artist?: Maybe<Artist>
  Artists?: Maybe<Artists>
  Media?: Maybe<Media>
  PayloadPreference?: Maybe<PayloadPreference>
  PayloadPreferences?: Maybe<PayloadPreferences>
  Performance?: Maybe<Performance>
  Performances?: Maybe<Performances>
  Performer?: Maybe<Performer>
  Performers?: Maybe<Performers>
  Setting?: Maybe<Setting>
  Show?: Maybe<Show>
  Shows?: Maybe<Shows>
  Song?: Maybe<Song>
  Songs?: Maybe<Songs>
  User?: Maybe<User>
  Users?: Maybe<Users>
  allMedia?: Maybe<AllMedia>
  docAccessArtist?: Maybe<ArtistsDocAccess>
  docAccessMedia?: Maybe<MediaDocAccess>
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>
  docAccessPerformance?: Maybe<PerformancesDocAccess>
  docAccessPerformer?: Maybe<PerformersDocAccess>
  docAccessSetting?: Maybe<SettingsDocAccess>
  docAccessShow?: Maybe<ShowsDocAccess>
  docAccessSong?: Maybe<SongsDocAccess>
  docAccessUser?: Maybe<UsersDocAccess>
  initializedUser?: Maybe<Scalars['Boolean']>
  meUser?: Maybe<UsersMe>
  versionArtist?: Maybe<ArtistVersion>
  versionPerformance?: Maybe<PerformanceVersion>
  versionPerformer?: Maybe<PerformerVersion>
  versionSetting?: Maybe<SettingVersion>
  versionShow?: Maybe<ShowVersion>
  versionSong?: Maybe<SongVersion>
  versionsArtists?: Maybe<VersionsArtists>
  versionsPerformances?: Maybe<VersionsPerformances>
  versionsPerformers?: Maybe<VersionsPerformers>
  versionsSetting?: Maybe<VersionsSetting>
  versionsShows?: Maybe<VersionsShows>
  versionsSongs?: Maybe<VersionsSongs>
}

export interface QueryArtistArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryArtistsArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<Artist_Where>
}

export interface QueryMediaArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryPayloadPreferenceArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryPayloadPreferencesArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<PayloadPreference_Where>
}

export interface QueryPerformanceArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryPerformancesArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<Performance_Where>
}

export interface QueryPerformerArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryPerformersArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<Performer_Where>
}

export interface QuerySettingArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryShowArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryShowsArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<Show_Where>
}

export interface QuerySongArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface QuerySongsArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<Song_Where>
}

export interface QueryUserArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryUsersArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<User_Where>
}

export interface QueryAllMediaArgs {
  draft?: InputMaybe<Scalars['Boolean']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<Media_Where>
}

export interface QueryDocAccessArtistArgs {
  id: Scalars['String']
}

export interface QueryDocAccessMediaArgs {
  id: Scalars['String']
}

export interface QueryDocAccessPayloadPreferenceArgs {
  id: Scalars['String']
}

export interface QueryDocAccessPerformanceArgs {
  id: Scalars['String']
}

export interface QueryDocAccessPerformerArgs {
  id: Scalars['String']
}

export interface QueryDocAccessShowArgs {
  id: Scalars['String']
}

export interface QueryDocAccessSongArgs {
  id: Scalars['String']
}

export interface QueryDocAccessUserArgs {
  id: Scalars['String']
}

export interface QueryVersionArtistArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryVersionPerformanceArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryVersionPerformerArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryVersionSettingArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryVersionShowArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryVersionSongArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<LocaleInputType>
}

export interface QueryVersionsArtistsArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<VersionsArtist_Where>
}

export interface QueryVersionsPerformancesArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<VersionsPerformance_Where>
}

export interface QueryVersionsPerformersArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<VersionsPerformer_Where>
}

export interface QueryVersionsSettingArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<VersionsSetting_Where>
}

export interface QueryVersionsShowsArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<VersionsShow_Where>
}

export interface QueryVersionsSongsArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  where?: InputMaybe<VersionsSong_Where>
}

export interface Setting {
  __typename?: 'Setting'
  _status?: Maybe<Setting__Status>
  createdAt?: Maybe<Scalars['DateTime']>
  now?: Maybe<Setting_Now_Relationship>
  show?: Maybe<Setting_Show_Relationship>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface SettingNowArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface SettingShowArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface SettingVersion {
  __typename?: 'SettingVersion'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  latest?: Maybe<Scalars['Boolean']>
  updatedAt?: Maybe<Scalars['DateTime']>
  version?: Maybe<SettingVersion_Version>
}

export interface SettingVersion_Version {
  __typename?: 'SettingVersion_Version'
  _status?: Maybe<SettingVersion_Version__Status>
  createdAt?: Maybe<Scalars['DateTime']>
  now?: Maybe<SettingVersion_Version_Now_Relationship>
  show?: Maybe<SettingVersion_Version_Show_Relationship>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface SettingVersion_VersionNowArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface SettingVersion_VersionShowArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type SettingVersion_Version_Now = Performance | Song

export enum SettingVersion_Version_Now_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export interface SettingVersion_Version_Now_Relationship {
  __typename?: 'SettingVersion_Version_Now_Relationship'
  relationTo?: Maybe<SettingVersion_Version_Now_RelationTo>
  value?: Maybe<SettingVersion_Version_Now>
}

export type SettingVersion_Version_Show = Show

export enum SettingVersion_Version_Show_RelationTo {
  Shows = 'shows'
}

export interface SettingVersion_Version_Show_Relationship {
  __typename?: 'SettingVersion_Version_Show_Relationship'
  relationTo?: Maybe<SettingVersion_Version_Show_RelationTo>
  value?: Maybe<SettingVersion_Version_Show>
}

export enum SettingVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type Setting_Now = Performance | Song

export interface Setting_NowRelationshipInput {
  relationTo?: InputMaybe<Setting_NowRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum Setting_NowRelationshipInputRelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export enum Setting_Now_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export interface Setting_Now_Relationship {
  __typename?: 'Setting_Now_Relationship'
  relationTo?: Maybe<Setting_Now_RelationTo>
  value?: Maybe<Setting_Now>
}

export type Setting_Show = Show

export interface Setting_ShowRelationshipInput {
  relationTo?: InputMaybe<Setting_ShowRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum Setting_ShowRelationshipInputRelationTo {
  Shows = 'shows'
}

export enum Setting_Show_RelationTo {
  Shows = 'shows'
}

export interface Setting_Show_Relationship {
  __typename?: 'Setting_Show_Relationship'
  relationTo?: Maybe<Setting_Show_RelationTo>
  value?: Maybe<Setting_Show>
}

export enum Setting__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Setting__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export interface SettingsDocAccessFields {
  __typename?: 'SettingsDocAccessFields'
  _status?: Maybe<SettingsDocAccessFields__Status>
  createdAt?: Maybe<SettingsDocAccessFields_CreatedAt>
  now?: Maybe<SettingsDocAccessFields_Now>
  show?: Maybe<SettingsDocAccessFields_Show>
  updatedAt?: Maybe<SettingsDocAccessFields_UpdatedAt>
}

export interface SettingsDocAccessFields__Status {
  __typename?: 'SettingsDocAccessFields__status'
  create?: Maybe<SettingsDocAccessFields__Status_Create>
  delete?: Maybe<SettingsDocAccessFields__Status_Delete>
  read?: Maybe<SettingsDocAccessFields__Status_Read>
  update?: Maybe<SettingsDocAccessFields__Status_Update>
}

export interface SettingsDocAccessFields__Status_Create {
  __typename?: 'SettingsDocAccessFields__status_Create'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields__Status_Delete {
  __typename?: 'SettingsDocAccessFields__status_Delete'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields__Status_Read {
  __typename?: 'SettingsDocAccessFields__status_Read'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields__Status_Update {
  __typename?: 'SettingsDocAccessFields__status_Update'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_CreatedAt {
  __typename?: 'SettingsDocAccessFields_createdAt'
  create?: Maybe<SettingsDocAccessFields_CreatedAt_Create>
  delete?: Maybe<SettingsDocAccessFields_CreatedAt_Delete>
  read?: Maybe<SettingsDocAccessFields_CreatedAt_Read>
  update?: Maybe<SettingsDocAccessFields_CreatedAt_Update>
}

export interface SettingsDocAccessFields_CreatedAt_Create {
  __typename?: 'SettingsDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_CreatedAt_Delete {
  __typename?: 'SettingsDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_CreatedAt_Read {
  __typename?: 'SettingsDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_CreatedAt_Update {
  __typename?: 'SettingsDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_Now {
  __typename?: 'SettingsDocAccessFields_now'
  create?: Maybe<SettingsDocAccessFields_Now_Create>
  delete?: Maybe<SettingsDocAccessFields_Now_Delete>
  read?: Maybe<SettingsDocAccessFields_Now_Read>
  update?: Maybe<SettingsDocAccessFields_Now_Update>
}

export interface SettingsDocAccessFields_Now_Create {
  __typename?: 'SettingsDocAccessFields_now_Create'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_Now_Delete {
  __typename?: 'SettingsDocAccessFields_now_Delete'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_Now_Read {
  __typename?: 'SettingsDocAccessFields_now_Read'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_Now_Update {
  __typename?: 'SettingsDocAccessFields_now_Update'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_Show {
  __typename?: 'SettingsDocAccessFields_show'
  create?: Maybe<SettingsDocAccessFields_Show_Create>
  delete?: Maybe<SettingsDocAccessFields_Show_Delete>
  read?: Maybe<SettingsDocAccessFields_Show_Read>
  update?: Maybe<SettingsDocAccessFields_Show_Update>
}

export interface SettingsDocAccessFields_Show_Create {
  __typename?: 'SettingsDocAccessFields_show_Create'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_Show_Delete {
  __typename?: 'SettingsDocAccessFields_show_Delete'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_Show_Read {
  __typename?: 'SettingsDocAccessFields_show_Read'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_Show_Update {
  __typename?: 'SettingsDocAccessFields_show_Update'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_UpdatedAt {
  __typename?: 'SettingsDocAccessFields_updatedAt'
  create?: Maybe<SettingsDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<SettingsDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<SettingsDocAccessFields_UpdatedAt_Read>
  update?: Maybe<SettingsDocAccessFields_UpdatedAt_Update>
}

export interface SettingsDocAccessFields_UpdatedAt_Create {
  __typename?: 'SettingsDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_UpdatedAt_Delete {
  __typename?: 'SettingsDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_UpdatedAt_Read {
  __typename?: 'SettingsDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface SettingsDocAccessFields_UpdatedAt_Update {
  __typename?: 'SettingsDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface SettingsFields {
  __typename?: 'SettingsFields'
  _status?: Maybe<SettingsFields__Status>
  createdAt?: Maybe<SettingsFields_CreatedAt>
  now?: Maybe<SettingsFields_Now>
  show?: Maybe<SettingsFields_Show>
  updatedAt?: Maybe<SettingsFields_UpdatedAt>
}

export interface SettingsFields__Status {
  __typename?: 'SettingsFields__status'
  create?: Maybe<SettingsFields__Status_Create>
  delete?: Maybe<SettingsFields__Status_Delete>
  read?: Maybe<SettingsFields__Status_Read>
  update?: Maybe<SettingsFields__Status_Update>
}

export interface SettingsFields__Status_Create {
  __typename?: 'SettingsFields__status_Create'
  permission: Scalars['Boolean']
}

export interface SettingsFields__Status_Delete {
  __typename?: 'SettingsFields__status_Delete'
  permission: Scalars['Boolean']
}

export interface SettingsFields__Status_Read {
  __typename?: 'SettingsFields__status_Read'
  permission: Scalars['Boolean']
}

export interface SettingsFields__Status_Update {
  __typename?: 'SettingsFields__status_Update'
  permission: Scalars['Boolean']
}

export interface SettingsFields_CreatedAt {
  __typename?: 'SettingsFields_createdAt'
  create?: Maybe<SettingsFields_CreatedAt_Create>
  delete?: Maybe<SettingsFields_CreatedAt_Delete>
  read?: Maybe<SettingsFields_CreatedAt_Read>
  update?: Maybe<SettingsFields_CreatedAt_Update>
}

export interface SettingsFields_CreatedAt_Create {
  __typename?: 'SettingsFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface SettingsFields_CreatedAt_Delete {
  __typename?: 'SettingsFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface SettingsFields_CreatedAt_Read {
  __typename?: 'SettingsFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface SettingsFields_CreatedAt_Update {
  __typename?: 'SettingsFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface SettingsFields_Now {
  __typename?: 'SettingsFields_now'
  create?: Maybe<SettingsFields_Now_Create>
  delete?: Maybe<SettingsFields_Now_Delete>
  read?: Maybe<SettingsFields_Now_Read>
  update?: Maybe<SettingsFields_Now_Update>
}

export interface SettingsFields_Now_Create {
  __typename?: 'SettingsFields_now_Create'
  permission: Scalars['Boolean']
}

export interface SettingsFields_Now_Delete {
  __typename?: 'SettingsFields_now_Delete'
  permission: Scalars['Boolean']
}

export interface SettingsFields_Now_Read {
  __typename?: 'SettingsFields_now_Read'
  permission: Scalars['Boolean']
}

export interface SettingsFields_Now_Update {
  __typename?: 'SettingsFields_now_Update'
  permission: Scalars['Boolean']
}

export interface SettingsFields_Show {
  __typename?: 'SettingsFields_show'
  create?: Maybe<SettingsFields_Show_Create>
  delete?: Maybe<SettingsFields_Show_Delete>
  read?: Maybe<SettingsFields_Show_Read>
  update?: Maybe<SettingsFields_Show_Update>
}

export interface SettingsFields_Show_Create {
  __typename?: 'SettingsFields_show_Create'
  permission: Scalars['Boolean']
}

export interface SettingsFields_Show_Delete {
  __typename?: 'SettingsFields_show_Delete'
  permission: Scalars['Boolean']
}

export interface SettingsFields_Show_Read {
  __typename?: 'SettingsFields_show_Read'
  permission: Scalars['Boolean']
}

export interface SettingsFields_Show_Update {
  __typename?: 'SettingsFields_show_Update'
  permission: Scalars['Boolean']
}

export interface SettingsFields_UpdatedAt {
  __typename?: 'SettingsFields_updatedAt'
  create?: Maybe<SettingsFields_UpdatedAt_Create>
  delete?: Maybe<SettingsFields_UpdatedAt_Delete>
  read?: Maybe<SettingsFields_UpdatedAt_Read>
  update?: Maybe<SettingsFields_UpdatedAt_Update>
}

export interface SettingsFields_UpdatedAt_Create {
  __typename?: 'SettingsFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface SettingsFields_UpdatedAt_Delete {
  __typename?: 'SettingsFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface SettingsFields_UpdatedAt_Read {
  __typename?: 'SettingsFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface SettingsFields_UpdatedAt_Update {
  __typename?: 'SettingsFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface SettingsReadAccess {
  __typename?: 'SettingsReadAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SettingsReadDocAccess {
  __typename?: 'SettingsReadDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SettingsReadVersionsAccess {
  __typename?: 'SettingsReadVersionsAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SettingsReadVersionsDocAccess {
  __typename?: 'SettingsReadVersionsDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SettingsUpdateAccess {
  __typename?: 'SettingsUpdateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SettingsUpdateDocAccess {
  __typename?: 'SettingsUpdateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface Show {
  __typename?: 'Show'
  _status?: Maybe<Show__Status>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['JSON']>
  id?: Maybe<Scalars['String']>
  performers?: Maybe<Show_Performers_Relationship[]>
  program?: Maybe<Show_Program_Relationship[]>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface ShowDescriptionArgs {
  depth?: InputMaybe<Scalars['Int']>
}

export interface ShowPerformersArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface ShowProgramArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface ShowUpdate_PerformersRelationshipInput {
  relationTo?: InputMaybe<ShowUpdate_PerformersRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum ShowUpdate_PerformersRelationshipInputRelationTo {
  Performers = 'performers'
}

export interface ShowUpdate_ProgramRelationshipInput {
  relationTo?: InputMaybe<ShowUpdate_ProgramRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum ShowUpdate_ProgramRelationshipInputRelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export enum ShowUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export interface ShowVersion {
  __typename?: 'ShowVersion'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  latest?: Maybe<Scalars['Boolean']>
  parent?: Maybe<Show>
  updatedAt?: Maybe<Scalars['DateTime']>
  version?: Maybe<ShowVersion_Version>
}

export interface ShowVersionParentArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface ShowVersion_Version {
  __typename?: 'ShowVersion_Version'
  _status?: Maybe<ShowVersion_Version__Status>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['JSON']>
  performers?: Maybe<ShowVersion_Version_Performers_Relationship[]>
  program?: Maybe<ShowVersion_Version_Program_Relationship[]>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface ShowVersion_VersionDescriptionArgs {
  depth?: InputMaybe<Scalars['Int']>
}

export interface ShowVersion_VersionPerformersArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface ShowVersion_VersionProgramArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type ShowVersion_Version_Performers = Performer

export enum ShowVersion_Version_Performers_RelationTo {
  Performers = 'performers'
}

export interface ShowVersion_Version_Performers_Relationship {
  __typename?: 'ShowVersion_Version_Performers_Relationship'
  relationTo?: Maybe<ShowVersion_Version_Performers_RelationTo>
  value?: Maybe<ShowVersion_Version_Performers>
}

export type ShowVersion_Version_Program = Performance | Song

export enum ShowVersion_Version_Program_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export interface ShowVersion_Version_Program_Relationship {
  __typename?: 'ShowVersion_Version_Program_Relationship'
  relationTo?: Maybe<ShowVersion_Version_Program_RelationTo>
  value?: Maybe<ShowVersion_Version_Program>
}

export enum ShowVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type Show_Performers = Performer

export interface Show_PerformersRelationshipInput {
  relationTo?: InputMaybe<Show_PerformersRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum Show_PerformersRelationshipInputRelationTo {
  Performers = 'performers'
}

export enum Show_Performers_RelationTo {
  Performers = 'performers'
}

export interface Show_Performers_Relationship {
  __typename?: 'Show_Performers_Relationship'
  relationTo?: Maybe<Show_Performers_RelationTo>
  value?: Maybe<Show_Performers>
}

export type Show_Program = Performance | Song

export interface Show_ProgramRelationshipInput {
  relationTo?: InputMaybe<Show_ProgramRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum Show_ProgramRelationshipInputRelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export enum Show_Program_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export interface Show_Program_Relationship {
  __typename?: 'Show_Program_Relationship'
  relationTo?: Maybe<Show_Program_RelationTo>
  value?: Maybe<Show_Program>
}

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

export interface Show__Status_Operator {
  all?: InputMaybe<Array<InputMaybe<Show__Status_Input>>>
  equals?: InputMaybe<Show__Status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Show__Status_Input>>>
  not_equals?: InputMaybe<Show__Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<Show__Status_Input>>>
}

export interface Show_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Show_Description_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
}

export interface Show_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Show_Performers_Relation {
  relationTo?: InputMaybe<Show_Performers_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum Show_Performers_Relation_RelationTo {
  Performers = 'performers'
}

export interface Show_Program_Relation {
  relationTo?: InputMaybe<Show_Program_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum Show_Program_Relation_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export interface Show_Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Show_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Show_Where {
  AND?: InputMaybe<Array<InputMaybe<Show_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Show_Where_Or>>>
  _status?: InputMaybe<Show__Status_Operator>
  createdAt?: InputMaybe<Show_CreatedAt_Operator>
  description?: InputMaybe<Show_Description_Operator>
  id?: InputMaybe<Show_Id_Operator>
  performers?: InputMaybe<Show_Performers_Relation>
  program?: InputMaybe<Show_Program_Relation>
  title?: InputMaybe<Show_Title_Operator>
  updatedAt?: InputMaybe<Show_UpdatedAt_Operator>
}

export interface Show_Where_And {
  AND?: InputMaybe<Array<InputMaybe<Show_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Show_Where_Or>>>
  _status?: InputMaybe<Show__Status_Operator>
  createdAt?: InputMaybe<Show_CreatedAt_Operator>
  description?: InputMaybe<Show_Description_Operator>
  id?: InputMaybe<Show_Id_Operator>
  performers?: InputMaybe<Show_Performers_Relation>
  program?: InputMaybe<Show_Program_Relation>
  title?: InputMaybe<Show_Title_Operator>
  updatedAt?: InputMaybe<Show_UpdatedAt_Operator>
}

export interface Show_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<Show_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Show_Where_Or>>>
  _status?: InputMaybe<Show__Status_Operator>
  createdAt?: InputMaybe<Show_CreatedAt_Operator>
  description?: InputMaybe<Show_Description_Operator>
  id?: InputMaybe<Show_Id_Operator>
  performers?: InputMaybe<Show_Performers_Relation>
  program?: InputMaybe<Show_Program_Relation>
  title?: InputMaybe<Show_Title_Operator>
  updatedAt?: InputMaybe<Show_UpdatedAt_Operator>
}

export interface Shows {
  __typename?: 'Shows'
  docs?: Maybe<Array<Maybe<Show>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface ShowsCreateAccess {
  __typename?: 'ShowsCreateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ShowsCreateDocAccess {
  __typename?: 'ShowsCreateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ShowsDeleteAccess {
  __typename?: 'ShowsDeleteAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ShowsDeleteDocAccess {
  __typename?: 'ShowsDeleteDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ShowsDocAccessFields {
  __typename?: 'ShowsDocAccessFields'
  _status?: Maybe<ShowsDocAccessFields__Status>
  createdAt?: Maybe<ShowsDocAccessFields_CreatedAt>
  description?: Maybe<ShowsDocAccessFields_Description>
  performers?: Maybe<ShowsDocAccessFields_Performers>
  program?: Maybe<ShowsDocAccessFields_Program>
  title?: Maybe<ShowsDocAccessFields_Title>
  updatedAt?: Maybe<ShowsDocAccessFields_UpdatedAt>
}

export interface ShowsDocAccessFields__Status {
  __typename?: 'ShowsDocAccessFields__status'
  create?: Maybe<ShowsDocAccessFields__Status_Create>
  delete?: Maybe<ShowsDocAccessFields__Status_Delete>
  read?: Maybe<ShowsDocAccessFields__Status_Read>
  update?: Maybe<ShowsDocAccessFields__Status_Update>
}

export interface ShowsDocAccessFields__Status_Create {
  __typename?: 'ShowsDocAccessFields__status_Create'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields__Status_Delete {
  __typename?: 'ShowsDocAccessFields__status_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields__Status_Read {
  __typename?: 'ShowsDocAccessFields__status_Read'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields__Status_Update {
  __typename?: 'ShowsDocAccessFields__status_Update'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_CreatedAt {
  __typename?: 'ShowsDocAccessFields_createdAt'
  create?: Maybe<ShowsDocAccessFields_CreatedAt_Create>
  delete?: Maybe<ShowsDocAccessFields_CreatedAt_Delete>
  read?: Maybe<ShowsDocAccessFields_CreatedAt_Read>
  update?: Maybe<ShowsDocAccessFields_CreatedAt_Update>
}

export interface ShowsDocAccessFields_CreatedAt_Create {
  __typename?: 'ShowsDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_CreatedAt_Delete {
  __typename?: 'ShowsDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_CreatedAt_Read {
  __typename?: 'ShowsDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_CreatedAt_Update {
  __typename?: 'ShowsDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Description {
  __typename?: 'ShowsDocAccessFields_description'
  create?: Maybe<ShowsDocAccessFields_Description_Create>
  delete?: Maybe<ShowsDocAccessFields_Description_Delete>
  read?: Maybe<ShowsDocAccessFields_Description_Read>
  update?: Maybe<ShowsDocAccessFields_Description_Update>
}

export interface ShowsDocAccessFields_Description_Create {
  __typename?: 'ShowsDocAccessFields_description_Create'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Description_Delete {
  __typename?: 'ShowsDocAccessFields_description_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Description_Read {
  __typename?: 'ShowsDocAccessFields_description_Read'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Description_Update {
  __typename?: 'ShowsDocAccessFields_description_Update'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Performers {
  __typename?: 'ShowsDocAccessFields_performers'
  create?: Maybe<ShowsDocAccessFields_Performers_Create>
  delete?: Maybe<ShowsDocAccessFields_Performers_Delete>
  read?: Maybe<ShowsDocAccessFields_Performers_Read>
  update?: Maybe<ShowsDocAccessFields_Performers_Update>
}

export interface ShowsDocAccessFields_Performers_Create {
  __typename?: 'ShowsDocAccessFields_performers_Create'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Performers_Delete {
  __typename?: 'ShowsDocAccessFields_performers_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Performers_Read {
  __typename?: 'ShowsDocAccessFields_performers_Read'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Performers_Update {
  __typename?: 'ShowsDocAccessFields_performers_Update'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Program {
  __typename?: 'ShowsDocAccessFields_program'
  create?: Maybe<ShowsDocAccessFields_Program_Create>
  delete?: Maybe<ShowsDocAccessFields_Program_Delete>
  read?: Maybe<ShowsDocAccessFields_Program_Read>
  update?: Maybe<ShowsDocAccessFields_Program_Update>
}

export interface ShowsDocAccessFields_Program_Create {
  __typename?: 'ShowsDocAccessFields_program_Create'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Program_Delete {
  __typename?: 'ShowsDocAccessFields_program_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Program_Read {
  __typename?: 'ShowsDocAccessFields_program_Read'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Program_Update {
  __typename?: 'ShowsDocAccessFields_program_Update'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Title {
  __typename?: 'ShowsDocAccessFields_title'
  create?: Maybe<ShowsDocAccessFields_Title_Create>
  delete?: Maybe<ShowsDocAccessFields_Title_Delete>
  read?: Maybe<ShowsDocAccessFields_Title_Read>
  update?: Maybe<ShowsDocAccessFields_Title_Update>
}

export interface ShowsDocAccessFields_Title_Create {
  __typename?: 'ShowsDocAccessFields_title_Create'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Title_Delete {
  __typename?: 'ShowsDocAccessFields_title_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Title_Read {
  __typename?: 'ShowsDocAccessFields_title_Read'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_Title_Update {
  __typename?: 'ShowsDocAccessFields_title_Update'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_UpdatedAt {
  __typename?: 'ShowsDocAccessFields_updatedAt'
  create?: Maybe<ShowsDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<ShowsDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<ShowsDocAccessFields_UpdatedAt_Read>
  update?: Maybe<ShowsDocAccessFields_UpdatedAt_Update>
}

export interface ShowsDocAccessFields_UpdatedAt_Create {
  __typename?: 'ShowsDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_UpdatedAt_Delete {
  __typename?: 'ShowsDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_UpdatedAt_Read {
  __typename?: 'ShowsDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface ShowsDocAccessFields_UpdatedAt_Update {
  __typename?: 'ShowsDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface ShowsFields {
  __typename?: 'ShowsFields'
  _status?: Maybe<ShowsFields__Status>
  createdAt?: Maybe<ShowsFields_CreatedAt>
  description?: Maybe<ShowsFields_Description>
  performers?: Maybe<ShowsFields_Performers>
  program?: Maybe<ShowsFields_Program>
  title?: Maybe<ShowsFields_Title>
  updatedAt?: Maybe<ShowsFields_UpdatedAt>
}

export interface ShowsFields__Status {
  __typename?: 'ShowsFields__status'
  create?: Maybe<ShowsFields__Status_Create>
  delete?: Maybe<ShowsFields__Status_Delete>
  read?: Maybe<ShowsFields__Status_Read>
  update?: Maybe<ShowsFields__Status_Update>
}

export interface ShowsFields__Status_Create {
  __typename?: 'ShowsFields__status_Create'
  permission: Scalars['Boolean']
}

export interface ShowsFields__Status_Delete {
  __typename?: 'ShowsFields__status_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsFields__Status_Read {
  __typename?: 'ShowsFields__status_Read'
  permission: Scalars['Boolean']
}

export interface ShowsFields__Status_Update {
  __typename?: 'ShowsFields__status_Update'
  permission: Scalars['Boolean']
}

export interface ShowsFields_CreatedAt {
  __typename?: 'ShowsFields_createdAt'
  create?: Maybe<ShowsFields_CreatedAt_Create>
  delete?: Maybe<ShowsFields_CreatedAt_Delete>
  read?: Maybe<ShowsFields_CreatedAt_Read>
  update?: Maybe<ShowsFields_CreatedAt_Update>
}

export interface ShowsFields_CreatedAt_Create {
  __typename?: 'ShowsFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface ShowsFields_CreatedAt_Delete {
  __typename?: 'ShowsFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsFields_CreatedAt_Read {
  __typename?: 'ShowsFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface ShowsFields_CreatedAt_Update {
  __typename?: 'ShowsFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Description {
  __typename?: 'ShowsFields_description'
  create?: Maybe<ShowsFields_Description_Create>
  delete?: Maybe<ShowsFields_Description_Delete>
  read?: Maybe<ShowsFields_Description_Read>
  update?: Maybe<ShowsFields_Description_Update>
}

export interface ShowsFields_Description_Create {
  __typename?: 'ShowsFields_description_Create'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Description_Delete {
  __typename?: 'ShowsFields_description_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Description_Read {
  __typename?: 'ShowsFields_description_Read'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Description_Update {
  __typename?: 'ShowsFields_description_Update'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Performers {
  __typename?: 'ShowsFields_performers'
  create?: Maybe<ShowsFields_Performers_Create>
  delete?: Maybe<ShowsFields_Performers_Delete>
  read?: Maybe<ShowsFields_Performers_Read>
  update?: Maybe<ShowsFields_Performers_Update>
}

export interface ShowsFields_Performers_Create {
  __typename?: 'ShowsFields_performers_Create'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Performers_Delete {
  __typename?: 'ShowsFields_performers_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Performers_Read {
  __typename?: 'ShowsFields_performers_Read'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Performers_Update {
  __typename?: 'ShowsFields_performers_Update'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Program {
  __typename?: 'ShowsFields_program'
  create?: Maybe<ShowsFields_Program_Create>
  delete?: Maybe<ShowsFields_Program_Delete>
  read?: Maybe<ShowsFields_Program_Read>
  update?: Maybe<ShowsFields_Program_Update>
}

export interface ShowsFields_Program_Create {
  __typename?: 'ShowsFields_program_Create'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Program_Delete {
  __typename?: 'ShowsFields_program_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Program_Read {
  __typename?: 'ShowsFields_program_Read'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Program_Update {
  __typename?: 'ShowsFields_program_Update'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Title {
  __typename?: 'ShowsFields_title'
  create?: Maybe<ShowsFields_Title_Create>
  delete?: Maybe<ShowsFields_Title_Delete>
  read?: Maybe<ShowsFields_Title_Read>
  update?: Maybe<ShowsFields_Title_Update>
}

export interface ShowsFields_Title_Create {
  __typename?: 'ShowsFields_title_Create'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Title_Delete {
  __typename?: 'ShowsFields_title_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Title_Read {
  __typename?: 'ShowsFields_title_Read'
  permission: Scalars['Boolean']
}

export interface ShowsFields_Title_Update {
  __typename?: 'ShowsFields_title_Update'
  permission: Scalars['Boolean']
}

export interface ShowsFields_UpdatedAt {
  __typename?: 'ShowsFields_updatedAt'
  create?: Maybe<ShowsFields_UpdatedAt_Create>
  delete?: Maybe<ShowsFields_UpdatedAt_Delete>
  read?: Maybe<ShowsFields_UpdatedAt_Read>
  update?: Maybe<ShowsFields_UpdatedAt_Update>
}

export interface ShowsFields_UpdatedAt_Create {
  __typename?: 'ShowsFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface ShowsFields_UpdatedAt_Delete {
  __typename?: 'ShowsFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface ShowsFields_UpdatedAt_Read {
  __typename?: 'ShowsFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface ShowsFields_UpdatedAt_Update {
  __typename?: 'ShowsFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface ShowsReadAccess {
  __typename?: 'ShowsReadAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ShowsReadDocAccess {
  __typename?: 'ShowsReadDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ShowsReadVersionsAccess {
  __typename?: 'ShowsReadVersionsAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ShowsReadVersionsDocAccess {
  __typename?: 'ShowsReadVersionsDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ShowsUpdateAccess {
  __typename?: 'ShowsUpdateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface ShowsUpdateDocAccess {
  __typename?: 'ShowsUpdateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface Song {
  __typename?: 'Song'
  _status?: Maybe<Song__Status>
  artists?: Maybe<Song_Artists_Relationship[]>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['JSON']>
  id?: Maybe<Scalars['String']>
  lyrics?: Maybe<Scalars['JSON']>
  lyricsAuthors?: Maybe<Song_LyricsAuthors_Relationship[]>
  musicAuthors?: Maybe<Song_MusicAuthors_Relationship[]>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface SongArtistsArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface SongDescriptionArgs {
  depth?: InputMaybe<Scalars['Int']>
}

export interface SongLyricsArgs {
  depth?: InputMaybe<Scalars['Int']>
}

export interface SongLyricsAuthorsArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface SongMusicAuthorsArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface SongUpdate_ArtistsRelationshipInput {
  relationTo?: InputMaybe<SongUpdate_ArtistsRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum SongUpdate_ArtistsRelationshipInputRelationTo {
  Artists = 'artists'
}

export interface SongUpdate_LyricsAuthorsRelationshipInput {
  relationTo?: InputMaybe<SongUpdate_LyricsAuthorsRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum SongUpdate_LyricsAuthorsRelationshipInputRelationTo {
  Artists = 'artists'
}

export interface SongUpdate_MusicAuthorsRelationshipInput {
  relationTo?: InputMaybe<SongUpdate_MusicAuthorsRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum SongUpdate_MusicAuthorsRelationshipInputRelationTo {
  Artists = 'artists'
}

export enum SongUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export interface SongVersion {
  __typename?: 'SongVersion'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  latest?: Maybe<Scalars['Boolean']>
  parent?: Maybe<Song>
  updatedAt?: Maybe<Scalars['DateTime']>
  version?: Maybe<SongVersion_Version>
}

export interface SongVersionParentArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface SongVersion_Version {
  __typename?: 'SongVersion_Version'
  _status?: Maybe<SongVersion_Version__Status>
  artists?: Maybe<SongVersion_Version_Artists_Relationship[]>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['JSON']>
  lyrics?: Maybe<Scalars['JSON']>
  lyricsAuthors?: Maybe<SongVersion_Version_LyricsAuthors_Relationship[]>
  musicAuthors?: Maybe<SongVersion_Version_MusicAuthors_Relationship[]>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface SongVersion_VersionArtistsArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface SongVersion_VersionDescriptionArgs {
  depth?: InputMaybe<Scalars['Int']>
}

export interface SongVersion_VersionLyricsArgs {
  depth?: InputMaybe<Scalars['Int']>
}

export interface SongVersion_VersionLyricsAuthorsArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export interface SongVersion_VersionMusicAuthorsArgs {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type SongVersion_Version_Artists = Artist

export enum SongVersion_Version_Artists_RelationTo {
  Artists = 'artists'
}

export interface SongVersion_Version_Artists_Relationship {
  __typename?: 'SongVersion_Version_Artists_Relationship'
  relationTo?: Maybe<SongVersion_Version_Artists_RelationTo>
  value?: Maybe<SongVersion_Version_Artists>
}

export type SongVersion_Version_LyricsAuthors = Artist

export enum SongVersion_Version_LyricsAuthors_RelationTo {
  Artists = 'artists'
}

export interface SongVersion_Version_LyricsAuthors_Relationship {
  __typename?: 'SongVersion_Version_LyricsAuthors_Relationship'
  relationTo?: Maybe<SongVersion_Version_LyricsAuthors_RelationTo>
  value?: Maybe<SongVersion_Version_LyricsAuthors>
}

export type SongVersion_Version_MusicAuthors = Artist

export enum SongVersion_Version_MusicAuthors_RelationTo {
  Artists = 'artists'
}

export interface SongVersion_Version_MusicAuthors_Relationship {
  __typename?: 'SongVersion_Version_MusicAuthors_Relationship'
  relationTo?: Maybe<SongVersion_Version_MusicAuthors_RelationTo>
  value?: Maybe<SongVersion_Version_MusicAuthors>
}

export enum SongVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type Song_Artists = Artist

export interface Song_ArtistsRelationshipInput {
  relationTo?: InputMaybe<Song_ArtistsRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum Song_ArtistsRelationshipInputRelationTo {
  Artists = 'artists'
}

export enum Song_Artists_RelationTo {
  Artists = 'artists'
}

export interface Song_Artists_Relationship {
  __typename?: 'Song_Artists_Relationship'
  relationTo?: Maybe<Song_Artists_RelationTo>
  value?: Maybe<Song_Artists>
}

export type Song_LyricsAuthors = Artist

export interface Song_LyricsAuthorsRelationshipInput {
  relationTo?: InputMaybe<Song_LyricsAuthorsRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum Song_LyricsAuthorsRelationshipInputRelationTo {
  Artists = 'artists'
}

export enum Song_LyricsAuthors_RelationTo {
  Artists = 'artists'
}

export interface Song_LyricsAuthors_Relationship {
  __typename?: 'Song_LyricsAuthors_Relationship'
  relationTo?: Maybe<Song_LyricsAuthors_RelationTo>
  value?: Maybe<Song_LyricsAuthors>
}

export type Song_MusicAuthors = Artist

export interface Song_MusicAuthorsRelationshipInput {
  relationTo?: InputMaybe<Song_MusicAuthorsRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum Song_MusicAuthorsRelationshipInputRelationTo {
  Artists = 'artists'
}

export enum Song_MusicAuthors_RelationTo {
  Artists = 'artists'
}

export interface Song_MusicAuthors_Relationship {
  __typename?: 'Song_MusicAuthors_Relationship'
  relationTo?: Maybe<Song_MusicAuthors_RelationTo>
  value?: Maybe<Song_MusicAuthors>
}

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

export interface Song__Status_Operator {
  all?: InputMaybe<Array<InputMaybe<Song__Status_Input>>>
  equals?: InputMaybe<Song__Status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Song__Status_Input>>>
  not_equals?: InputMaybe<Song__Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<Song__Status_Input>>>
}

export interface Song_Artists_Relation {
  relationTo?: InputMaybe<Song_Artists_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum Song_Artists_Relation_RelationTo {
  Artists = 'artists'
}

export interface Song_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Song_Description_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
}

export interface Song_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Song_LyricsAuthors_Relation {
  relationTo?: InputMaybe<Song_LyricsAuthors_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum Song_LyricsAuthors_Relation_RelationTo {
  Artists = 'artists'
}

export interface Song_Lyrics_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
}

export interface Song_MusicAuthors_Relation {
  relationTo?: InputMaybe<Song_MusicAuthors_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum Song_MusicAuthors_Relation_RelationTo {
  Artists = 'artists'
}

export interface Song_Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface Song_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface Song_Where {
  AND?: InputMaybe<Array<InputMaybe<Song_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Song_Where_Or>>>
  _status?: InputMaybe<Song__Status_Operator>
  artists?: InputMaybe<Song_Artists_Relation>
  createdAt?: InputMaybe<Song_CreatedAt_Operator>
  description?: InputMaybe<Song_Description_Operator>
  id?: InputMaybe<Song_Id_Operator>
  lyrics?: InputMaybe<Song_Lyrics_Operator>
  lyricsAuthors?: InputMaybe<Song_LyricsAuthors_Relation>
  musicAuthors?: InputMaybe<Song_MusicAuthors_Relation>
  title?: InputMaybe<Song_Title_Operator>
  updatedAt?: InputMaybe<Song_UpdatedAt_Operator>
}

export interface Song_Where_And {
  AND?: InputMaybe<Array<InputMaybe<Song_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Song_Where_Or>>>
  _status?: InputMaybe<Song__Status_Operator>
  artists?: InputMaybe<Song_Artists_Relation>
  createdAt?: InputMaybe<Song_CreatedAt_Operator>
  description?: InputMaybe<Song_Description_Operator>
  id?: InputMaybe<Song_Id_Operator>
  lyrics?: InputMaybe<Song_Lyrics_Operator>
  lyricsAuthors?: InputMaybe<Song_LyricsAuthors_Relation>
  musicAuthors?: InputMaybe<Song_MusicAuthors_Relation>
  title?: InputMaybe<Song_Title_Operator>
  updatedAt?: InputMaybe<Song_UpdatedAt_Operator>
}

export interface Song_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<Song_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Song_Where_Or>>>
  _status?: InputMaybe<Song__Status_Operator>
  artists?: InputMaybe<Song_Artists_Relation>
  createdAt?: InputMaybe<Song_CreatedAt_Operator>
  description?: InputMaybe<Song_Description_Operator>
  id?: InputMaybe<Song_Id_Operator>
  lyrics?: InputMaybe<Song_Lyrics_Operator>
  lyricsAuthors?: InputMaybe<Song_LyricsAuthors_Relation>
  musicAuthors?: InputMaybe<Song_MusicAuthors_Relation>
  title?: InputMaybe<Song_Title_Operator>
  updatedAt?: InputMaybe<Song_UpdatedAt_Operator>
}

export interface Songs {
  __typename?: 'Songs'
  docs?: Maybe<Array<Maybe<Song>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface SongsCreateAccess {
  __typename?: 'SongsCreateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SongsCreateDocAccess {
  __typename?: 'SongsCreateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SongsDeleteAccess {
  __typename?: 'SongsDeleteAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SongsDeleteDocAccess {
  __typename?: 'SongsDeleteDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SongsDocAccessFields {
  __typename?: 'SongsDocAccessFields'
  _status?: Maybe<SongsDocAccessFields__Status>
  artists?: Maybe<SongsDocAccessFields_Artists>
  createdAt?: Maybe<SongsDocAccessFields_CreatedAt>
  description?: Maybe<SongsDocAccessFields_Description>
  lyrics?: Maybe<SongsDocAccessFields_Lyrics>
  lyricsAuthors?: Maybe<SongsDocAccessFields_LyricsAuthors>
  musicAuthors?: Maybe<SongsDocAccessFields_MusicAuthors>
  title?: Maybe<SongsDocAccessFields_Title>
  updatedAt?: Maybe<SongsDocAccessFields_UpdatedAt>
}

export interface SongsDocAccessFields__Status {
  __typename?: 'SongsDocAccessFields__status'
  create?: Maybe<SongsDocAccessFields__Status_Create>
  delete?: Maybe<SongsDocAccessFields__Status_Delete>
  read?: Maybe<SongsDocAccessFields__Status_Read>
  update?: Maybe<SongsDocAccessFields__Status_Update>
}

export interface SongsDocAccessFields__Status_Create {
  __typename?: 'SongsDocAccessFields__status_Create'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields__Status_Delete {
  __typename?: 'SongsDocAccessFields__status_Delete'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields__Status_Read {
  __typename?: 'SongsDocAccessFields__status_Read'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields__Status_Update {
  __typename?: 'SongsDocAccessFields__status_Update'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Artists {
  __typename?: 'SongsDocAccessFields_artists'
  create?: Maybe<SongsDocAccessFields_Artists_Create>
  delete?: Maybe<SongsDocAccessFields_Artists_Delete>
  read?: Maybe<SongsDocAccessFields_Artists_Read>
  update?: Maybe<SongsDocAccessFields_Artists_Update>
}

export interface SongsDocAccessFields_Artists_Create {
  __typename?: 'SongsDocAccessFields_artists_Create'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Artists_Delete {
  __typename?: 'SongsDocAccessFields_artists_Delete'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Artists_Read {
  __typename?: 'SongsDocAccessFields_artists_Read'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Artists_Update {
  __typename?: 'SongsDocAccessFields_artists_Update'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_CreatedAt {
  __typename?: 'SongsDocAccessFields_createdAt'
  create?: Maybe<SongsDocAccessFields_CreatedAt_Create>
  delete?: Maybe<SongsDocAccessFields_CreatedAt_Delete>
  read?: Maybe<SongsDocAccessFields_CreatedAt_Read>
  update?: Maybe<SongsDocAccessFields_CreatedAt_Update>
}

export interface SongsDocAccessFields_CreatedAt_Create {
  __typename?: 'SongsDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_CreatedAt_Delete {
  __typename?: 'SongsDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_CreatedAt_Read {
  __typename?: 'SongsDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_CreatedAt_Update {
  __typename?: 'SongsDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Description {
  __typename?: 'SongsDocAccessFields_description'
  create?: Maybe<SongsDocAccessFields_Description_Create>
  delete?: Maybe<SongsDocAccessFields_Description_Delete>
  read?: Maybe<SongsDocAccessFields_Description_Read>
  update?: Maybe<SongsDocAccessFields_Description_Update>
}

export interface SongsDocAccessFields_Description_Create {
  __typename?: 'SongsDocAccessFields_description_Create'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Description_Delete {
  __typename?: 'SongsDocAccessFields_description_Delete'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Description_Read {
  __typename?: 'SongsDocAccessFields_description_Read'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Description_Update {
  __typename?: 'SongsDocAccessFields_description_Update'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Lyrics {
  __typename?: 'SongsDocAccessFields_lyrics'
  create?: Maybe<SongsDocAccessFields_Lyrics_Create>
  delete?: Maybe<SongsDocAccessFields_Lyrics_Delete>
  read?: Maybe<SongsDocAccessFields_Lyrics_Read>
  update?: Maybe<SongsDocAccessFields_Lyrics_Update>
}

export interface SongsDocAccessFields_LyricsAuthors {
  __typename?: 'SongsDocAccessFields_lyricsAuthors'
  create?: Maybe<SongsDocAccessFields_LyricsAuthors_Create>
  delete?: Maybe<SongsDocAccessFields_LyricsAuthors_Delete>
  read?: Maybe<SongsDocAccessFields_LyricsAuthors_Read>
  update?: Maybe<SongsDocAccessFields_LyricsAuthors_Update>
}

export interface SongsDocAccessFields_LyricsAuthors_Create {
  __typename?: 'SongsDocAccessFields_lyricsAuthors_Create'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_LyricsAuthors_Delete {
  __typename?: 'SongsDocAccessFields_lyricsAuthors_Delete'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_LyricsAuthors_Read {
  __typename?: 'SongsDocAccessFields_lyricsAuthors_Read'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_LyricsAuthors_Update {
  __typename?: 'SongsDocAccessFields_lyricsAuthors_Update'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Lyrics_Create {
  __typename?: 'SongsDocAccessFields_lyrics_Create'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Lyrics_Delete {
  __typename?: 'SongsDocAccessFields_lyrics_Delete'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Lyrics_Read {
  __typename?: 'SongsDocAccessFields_lyrics_Read'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Lyrics_Update {
  __typename?: 'SongsDocAccessFields_lyrics_Update'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_MusicAuthors {
  __typename?: 'SongsDocAccessFields_musicAuthors'
  create?: Maybe<SongsDocAccessFields_MusicAuthors_Create>
  delete?: Maybe<SongsDocAccessFields_MusicAuthors_Delete>
  read?: Maybe<SongsDocAccessFields_MusicAuthors_Read>
  update?: Maybe<SongsDocAccessFields_MusicAuthors_Update>
}

export interface SongsDocAccessFields_MusicAuthors_Create {
  __typename?: 'SongsDocAccessFields_musicAuthors_Create'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_MusicAuthors_Delete {
  __typename?: 'SongsDocAccessFields_musicAuthors_Delete'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_MusicAuthors_Read {
  __typename?: 'SongsDocAccessFields_musicAuthors_Read'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_MusicAuthors_Update {
  __typename?: 'SongsDocAccessFields_musicAuthors_Update'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Title {
  __typename?: 'SongsDocAccessFields_title'
  create?: Maybe<SongsDocAccessFields_Title_Create>
  delete?: Maybe<SongsDocAccessFields_Title_Delete>
  read?: Maybe<SongsDocAccessFields_Title_Read>
  update?: Maybe<SongsDocAccessFields_Title_Update>
}

export interface SongsDocAccessFields_Title_Create {
  __typename?: 'SongsDocAccessFields_title_Create'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Title_Delete {
  __typename?: 'SongsDocAccessFields_title_Delete'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Title_Read {
  __typename?: 'SongsDocAccessFields_title_Read'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_Title_Update {
  __typename?: 'SongsDocAccessFields_title_Update'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_UpdatedAt {
  __typename?: 'SongsDocAccessFields_updatedAt'
  create?: Maybe<SongsDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<SongsDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<SongsDocAccessFields_UpdatedAt_Read>
  update?: Maybe<SongsDocAccessFields_UpdatedAt_Update>
}

export interface SongsDocAccessFields_UpdatedAt_Create {
  __typename?: 'SongsDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_UpdatedAt_Delete {
  __typename?: 'SongsDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_UpdatedAt_Read {
  __typename?: 'SongsDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface SongsDocAccessFields_UpdatedAt_Update {
  __typename?: 'SongsDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface SongsFields {
  __typename?: 'SongsFields'
  _status?: Maybe<SongsFields__Status>
  artists?: Maybe<SongsFields_Artists>
  createdAt?: Maybe<SongsFields_CreatedAt>
  description?: Maybe<SongsFields_Description>
  lyrics?: Maybe<SongsFields_Lyrics>
  lyricsAuthors?: Maybe<SongsFields_LyricsAuthors>
  musicAuthors?: Maybe<SongsFields_MusicAuthors>
  title?: Maybe<SongsFields_Title>
  updatedAt?: Maybe<SongsFields_UpdatedAt>
}

export interface SongsFields__Status {
  __typename?: 'SongsFields__status'
  create?: Maybe<SongsFields__Status_Create>
  delete?: Maybe<SongsFields__Status_Delete>
  read?: Maybe<SongsFields__Status_Read>
  update?: Maybe<SongsFields__Status_Update>
}

export interface SongsFields__Status_Create {
  __typename?: 'SongsFields__status_Create'
  permission: Scalars['Boolean']
}

export interface SongsFields__Status_Delete {
  __typename?: 'SongsFields__status_Delete'
  permission: Scalars['Boolean']
}

export interface SongsFields__Status_Read {
  __typename?: 'SongsFields__status_Read'
  permission: Scalars['Boolean']
}

export interface SongsFields__Status_Update {
  __typename?: 'SongsFields__status_Update'
  permission: Scalars['Boolean']
}

export interface SongsFields_Artists {
  __typename?: 'SongsFields_artists'
  create?: Maybe<SongsFields_Artists_Create>
  delete?: Maybe<SongsFields_Artists_Delete>
  read?: Maybe<SongsFields_Artists_Read>
  update?: Maybe<SongsFields_Artists_Update>
}

export interface SongsFields_Artists_Create {
  __typename?: 'SongsFields_artists_Create'
  permission: Scalars['Boolean']
}

export interface SongsFields_Artists_Delete {
  __typename?: 'SongsFields_artists_Delete'
  permission: Scalars['Boolean']
}

export interface SongsFields_Artists_Read {
  __typename?: 'SongsFields_artists_Read'
  permission: Scalars['Boolean']
}

export interface SongsFields_Artists_Update {
  __typename?: 'SongsFields_artists_Update'
  permission: Scalars['Boolean']
}

export interface SongsFields_CreatedAt {
  __typename?: 'SongsFields_createdAt'
  create?: Maybe<SongsFields_CreatedAt_Create>
  delete?: Maybe<SongsFields_CreatedAt_Delete>
  read?: Maybe<SongsFields_CreatedAt_Read>
  update?: Maybe<SongsFields_CreatedAt_Update>
}

export interface SongsFields_CreatedAt_Create {
  __typename?: 'SongsFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface SongsFields_CreatedAt_Delete {
  __typename?: 'SongsFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface SongsFields_CreatedAt_Read {
  __typename?: 'SongsFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface SongsFields_CreatedAt_Update {
  __typename?: 'SongsFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface SongsFields_Description {
  __typename?: 'SongsFields_description'
  create?: Maybe<SongsFields_Description_Create>
  delete?: Maybe<SongsFields_Description_Delete>
  read?: Maybe<SongsFields_Description_Read>
  update?: Maybe<SongsFields_Description_Update>
}

export interface SongsFields_Description_Create {
  __typename?: 'SongsFields_description_Create'
  permission: Scalars['Boolean']
}

export interface SongsFields_Description_Delete {
  __typename?: 'SongsFields_description_Delete'
  permission: Scalars['Boolean']
}

export interface SongsFields_Description_Read {
  __typename?: 'SongsFields_description_Read'
  permission: Scalars['Boolean']
}

export interface SongsFields_Description_Update {
  __typename?: 'SongsFields_description_Update'
  permission: Scalars['Boolean']
}

export interface SongsFields_Lyrics {
  __typename?: 'SongsFields_lyrics'
  create?: Maybe<SongsFields_Lyrics_Create>
  delete?: Maybe<SongsFields_Lyrics_Delete>
  read?: Maybe<SongsFields_Lyrics_Read>
  update?: Maybe<SongsFields_Lyrics_Update>
}

export interface SongsFields_LyricsAuthors {
  __typename?: 'SongsFields_lyricsAuthors'
  create?: Maybe<SongsFields_LyricsAuthors_Create>
  delete?: Maybe<SongsFields_LyricsAuthors_Delete>
  read?: Maybe<SongsFields_LyricsAuthors_Read>
  update?: Maybe<SongsFields_LyricsAuthors_Update>
}

export interface SongsFields_LyricsAuthors_Create {
  __typename?: 'SongsFields_lyricsAuthors_Create'
  permission: Scalars['Boolean']
}

export interface SongsFields_LyricsAuthors_Delete {
  __typename?: 'SongsFields_lyricsAuthors_Delete'
  permission: Scalars['Boolean']
}

export interface SongsFields_LyricsAuthors_Read {
  __typename?: 'SongsFields_lyricsAuthors_Read'
  permission: Scalars['Boolean']
}

export interface SongsFields_LyricsAuthors_Update {
  __typename?: 'SongsFields_lyricsAuthors_Update'
  permission: Scalars['Boolean']
}

export interface SongsFields_Lyrics_Create {
  __typename?: 'SongsFields_lyrics_Create'
  permission: Scalars['Boolean']
}

export interface SongsFields_Lyrics_Delete {
  __typename?: 'SongsFields_lyrics_Delete'
  permission: Scalars['Boolean']
}

export interface SongsFields_Lyrics_Read {
  __typename?: 'SongsFields_lyrics_Read'
  permission: Scalars['Boolean']
}

export interface SongsFields_Lyrics_Update {
  __typename?: 'SongsFields_lyrics_Update'
  permission: Scalars['Boolean']
}

export interface SongsFields_MusicAuthors {
  __typename?: 'SongsFields_musicAuthors'
  create?: Maybe<SongsFields_MusicAuthors_Create>
  delete?: Maybe<SongsFields_MusicAuthors_Delete>
  read?: Maybe<SongsFields_MusicAuthors_Read>
  update?: Maybe<SongsFields_MusicAuthors_Update>
}

export interface SongsFields_MusicAuthors_Create {
  __typename?: 'SongsFields_musicAuthors_Create'
  permission: Scalars['Boolean']
}

export interface SongsFields_MusicAuthors_Delete {
  __typename?: 'SongsFields_musicAuthors_Delete'
  permission: Scalars['Boolean']
}

export interface SongsFields_MusicAuthors_Read {
  __typename?: 'SongsFields_musicAuthors_Read'
  permission: Scalars['Boolean']
}

export interface SongsFields_MusicAuthors_Update {
  __typename?: 'SongsFields_musicAuthors_Update'
  permission: Scalars['Boolean']
}

export interface SongsFields_Title {
  __typename?: 'SongsFields_title'
  create?: Maybe<SongsFields_Title_Create>
  delete?: Maybe<SongsFields_Title_Delete>
  read?: Maybe<SongsFields_Title_Read>
  update?: Maybe<SongsFields_Title_Update>
}

export interface SongsFields_Title_Create {
  __typename?: 'SongsFields_title_Create'
  permission: Scalars['Boolean']
}

export interface SongsFields_Title_Delete {
  __typename?: 'SongsFields_title_Delete'
  permission: Scalars['Boolean']
}

export interface SongsFields_Title_Read {
  __typename?: 'SongsFields_title_Read'
  permission: Scalars['Boolean']
}

export interface SongsFields_Title_Update {
  __typename?: 'SongsFields_title_Update'
  permission: Scalars['Boolean']
}

export interface SongsFields_UpdatedAt {
  __typename?: 'SongsFields_updatedAt'
  create?: Maybe<SongsFields_UpdatedAt_Create>
  delete?: Maybe<SongsFields_UpdatedAt_Delete>
  read?: Maybe<SongsFields_UpdatedAt_Read>
  update?: Maybe<SongsFields_UpdatedAt_Update>
}

export interface SongsFields_UpdatedAt_Create {
  __typename?: 'SongsFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface SongsFields_UpdatedAt_Delete {
  __typename?: 'SongsFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface SongsFields_UpdatedAt_Read {
  __typename?: 'SongsFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface SongsFields_UpdatedAt_Update {
  __typename?: 'SongsFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface SongsReadAccess {
  __typename?: 'SongsReadAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SongsReadDocAccess {
  __typename?: 'SongsReadDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SongsReadVersionsAccess {
  __typename?: 'SongsReadVersionsAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SongsReadVersionsDocAccess {
  __typename?: 'SongsReadVersionsDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SongsUpdateAccess {
  __typename?: 'SongsUpdateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface SongsUpdateDocAccess {
  __typename?: 'SongsUpdateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface User {
  __typename?: 'User'
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['EmailAddress']
  hash?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lockUntil?: Maybe<Scalars['DateTime']>
  loginAttempts?: Maybe<Scalars['Float']>
  password: Scalars['String']
  resetPasswordExpiration?: Maybe<Scalars['DateTime']>
  resetPasswordToken?: Maybe<Scalars['String']>
  salt?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export interface User_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface User_Email_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>
  contains?: InputMaybe<Scalars['EmailAddress']>
  equals?: InputMaybe<Scalars['EmailAddress']>
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>
  like?: InputMaybe<Scalars['EmailAddress']>
  not_equals?: InputMaybe<Scalars['EmailAddress']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>
}

export interface User_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface User_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface User_Where {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>
  createdAt?: InputMaybe<User_CreatedAt_Operator>
  email?: InputMaybe<User_Email_Operator>
  id?: InputMaybe<User_Id_Operator>
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>
}

export interface User_Where_And {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>
  createdAt?: InputMaybe<User_CreatedAt_Operator>
  email?: InputMaybe<User_Email_Operator>
  id?: InputMaybe<User_Id_Operator>
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>
}

export interface User_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>
  createdAt?: InputMaybe<User_CreatedAt_Operator>
  email?: InputMaybe<User_Email_Operator>
  id?: InputMaybe<User_Id_Operator>
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>
}

export interface Users {
  __typename?: 'Users'
  docs?: Maybe<Array<Maybe<User>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface UsersCreateAccess {
  __typename?: 'UsersCreateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface UsersCreateDocAccess {
  __typename?: 'UsersCreateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface UsersDeleteAccess {
  __typename?: 'UsersDeleteAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface UsersDeleteDocAccess {
  __typename?: 'UsersDeleteDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface UsersDocAccessFields {
  __typename?: 'UsersDocAccessFields'
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>
  email?: Maybe<UsersDocAccessFields_Email>
  password?: Maybe<UsersDocAccessFields_Password>
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>
}

export interface UsersDocAccessFields_CreatedAt {
  __typename?: 'UsersDocAccessFields_createdAt'
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>
}

export interface UsersDocAccessFields_CreatedAt_Create {
  __typename?: 'UsersDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_CreatedAt_Delete {
  __typename?: 'UsersDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_CreatedAt_Read {
  __typename?: 'UsersDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_CreatedAt_Update {
  __typename?: 'UsersDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_Email {
  __typename?: 'UsersDocAccessFields_email'
  create?: Maybe<UsersDocAccessFields_Email_Create>
  delete?: Maybe<UsersDocAccessFields_Email_Delete>
  read?: Maybe<UsersDocAccessFields_Email_Read>
  update?: Maybe<UsersDocAccessFields_Email_Update>
}

export interface UsersDocAccessFields_Email_Create {
  __typename?: 'UsersDocAccessFields_email_Create'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_Email_Delete {
  __typename?: 'UsersDocAccessFields_email_Delete'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_Email_Read {
  __typename?: 'UsersDocAccessFields_email_Read'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_Email_Update {
  __typename?: 'UsersDocAccessFields_email_Update'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_Password {
  __typename?: 'UsersDocAccessFields_password'
  create?: Maybe<UsersDocAccessFields_Password_Create>
  delete?: Maybe<UsersDocAccessFields_Password_Delete>
  read?: Maybe<UsersDocAccessFields_Password_Read>
  update?: Maybe<UsersDocAccessFields_Password_Update>
}

export interface UsersDocAccessFields_Password_Create {
  __typename?: 'UsersDocAccessFields_password_Create'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_Password_Delete {
  __typename?: 'UsersDocAccessFields_password_Delete'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_Password_Read {
  __typename?: 'UsersDocAccessFields_password_Read'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_Password_Update {
  __typename?: 'UsersDocAccessFields_password_Update'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_UpdatedAt {
  __typename?: 'UsersDocAccessFields_updatedAt'
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>
}

export interface UsersDocAccessFields_UpdatedAt_Create {
  __typename?: 'UsersDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_UpdatedAt_Delete {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_UpdatedAt_Read {
  __typename?: 'UsersDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface UsersDocAccessFields_UpdatedAt_Update {
  __typename?: 'UsersDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface UsersFields {
  __typename?: 'UsersFields'
  createdAt?: Maybe<UsersFields_CreatedAt>
  email?: Maybe<UsersFields_Email>
  password?: Maybe<UsersFields_Password>
  updatedAt?: Maybe<UsersFields_UpdatedAt>
}

export interface UsersFields_CreatedAt {
  __typename?: 'UsersFields_createdAt'
  create?: Maybe<UsersFields_CreatedAt_Create>
  delete?: Maybe<UsersFields_CreatedAt_Delete>
  read?: Maybe<UsersFields_CreatedAt_Read>
  update?: Maybe<UsersFields_CreatedAt_Update>
}

export interface UsersFields_CreatedAt_Create {
  __typename?: 'UsersFields_createdAt_Create'
  permission: Scalars['Boolean']
}

export interface UsersFields_CreatedAt_Delete {
  __typename?: 'UsersFields_createdAt_Delete'
  permission: Scalars['Boolean']
}

export interface UsersFields_CreatedAt_Read {
  __typename?: 'UsersFields_createdAt_Read'
  permission: Scalars['Boolean']
}

export interface UsersFields_CreatedAt_Update {
  __typename?: 'UsersFields_createdAt_Update'
  permission: Scalars['Boolean']
}

export interface UsersFields_Email {
  __typename?: 'UsersFields_email'
  create?: Maybe<UsersFields_Email_Create>
  delete?: Maybe<UsersFields_Email_Delete>
  read?: Maybe<UsersFields_Email_Read>
  update?: Maybe<UsersFields_Email_Update>
}

export interface UsersFields_Email_Create {
  __typename?: 'UsersFields_email_Create'
  permission: Scalars['Boolean']
}

export interface UsersFields_Email_Delete {
  __typename?: 'UsersFields_email_Delete'
  permission: Scalars['Boolean']
}

export interface UsersFields_Email_Read {
  __typename?: 'UsersFields_email_Read'
  permission: Scalars['Boolean']
}

export interface UsersFields_Email_Update {
  __typename?: 'UsersFields_email_Update'
  permission: Scalars['Boolean']
}

export interface UsersFields_Password {
  __typename?: 'UsersFields_password'
  create?: Maybe<UsersFields_Password_Create>
  delete?: Maybe<UsersFields_Password_Delete>
  read?: Maybe<UsersFields_Password_Read>
  update?: Maybe<UsersFields_Password_Update>
}

export interface UsersFields_Password_Create {
  __typename?: 'UsersFields_password_Create'
  permission: Scalars['Boolean']
}

export interface UsersFields_Password_Delete {
  __typename?: 'UsersFields_password_Delete'
  permission: Scalars['Boolean']
}

export interface UsersFields_Password_Read {
  __typename?: 'UsersFields_password_Read'
  permission: Scalars['Boolean']
}

export interface UsersFields_Password_Update {
  __typename?: 'UsersFields_password_Update'
  permission: Scalars['Boolean']
}

export interface UsersFields_UpdatedAt {
  __typename?: 'UsersFields_updatedAt'
  create?: Maybe<UsersFields_UpdatedAt_Create>
  delete?: Maybe<UsersFields_UpdatedAt_Delete>
  read?: Maybe<UsersFields_UpdatedAt_Read>
  update?: Maybe<UsersFields_UpdatedAt_Update>
}

export interface UsersFields_UpdatedAt_Create {
  __typename?: 'UsersFields_updatedAt_Create'
  permission: Scalars['Boolean']
}

export interface UsersFields_UpdatedAt_Delete {
  __typename?: 'UsersFields_updatedAt_Delete'
  permission: Scalars['Boolean']
}

export interface UsersFields_UpdatedAt_Read {
  __typename?: 'UsersFields_updatedAt_Read'
  permission: Scalars['Boolean']
}

export interface UsersFields_UpdatedAt_Update {
  __typename?: 'UsersFields_updatedAt_Update'
  permission: Scalars['Boolean']
}

export interface UsersReadAccess {
  __typename?: 'UsersReadAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface UsersReadDocAccess {
  __typename?: 'UsersReadDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface UsersUnlockAccess {
  __typename?: 'UsersUnlockAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface UsersUnlockDocAccess {
  __typename?: 'UsersUnlockDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface UsersUpdateAccess {
  __typename?: 'UsersUpdateAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface UsersUpdateDocAccess {
  __typename?: 'UsersUpdateDocAccess'
  permission: Scalars['Boolean']
  where?: Maybe<Scalars['JSONObject']>
}

export interface AllMedia {
  __typename?: 'allMedia'
  docs?: Maybe<Array<Maybe<Media>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface ArtistsAccess {
  __typename?: 'artistsAccess'
  create?: Maybe<ArtistsCreateAccess>
  delete?: Maybe<ArtistsDeleteAccess>
  fields?: Maybe<ArtistsFields>
  read?: Maybe<ArtistsReadAccess>
  readVersions?: Maybe<ArtistsReadVersionsAccess>
  update?: Maybe<ArtistsUpdateAccess>
}

export interface ArtistsDocAccess {
  __typename?: 'artistsDocAccess'
  create?: Maybe<ArtistsCreateDocAccess>
  delete?: Maybe<ArtistsDeleteDocAccess>
  fields?: Maybe<ArtistsDocAccessFields>
  read?: Maybe<ArtistsReadDocAccess>
  readVersions?: Maybe<ArtistsReadVersionsDocAccess>
  update?: Maybe<ArtistsUpdateDocAccess>
}

export interface MediaAccess {
  __typename?: 'mediaAccess'
  create?: Maybe<MediaCreateAccess>
  delete?: Maybe<MediaDeleteAccess>
  fields?: Maybe<MediaFields>
  read?: Maybe<MediaReadAccess>
  update?: Maybe<MediaUpdateAccess>
}

export interface MediaDocAccess {
  __typename?: 'mediaDocAccess'
  create?: Maybe<MediaCreateDocAccess>
  delete?: Maybe<MediaDeleteDocAccess>
  fields?: Maybe<MediaDocAccessFields>
  read?: Maybe<MediaReadDocAccess>
  update?: Maybe<MediaUpdateDocAccess>
}

export interface MutationArtistInput {
  _status?: InputMaybe<Artist__Status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['JSON']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export interface MutationArtistUpdateInput {
  _status?: InputMaybe<ArtistUpdate__Status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['JSON']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export interface MutationMediaInput {
  alt?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['String']>
  filename?: InputMaybe<Scalars['String']>
  filesize?: InputMaybe<Scalars['Float']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Float']>
}

export interface MutationMediaUpdateInput {
  alt?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['String']>
  filename?: InputMaybe<Scalars['String']>
  filesize?: InputMaybe<Scalars['Float']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Float']>
}

export interface MutationPayloadPreferenceInput {
  createdAt?: InputMaybe<Scalars['String']>
  key?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>
  value?: InputMaybe<Scalars['JSON']>
}

export interface MutationPayloadPreferenceUpdateInput {
  createdAt?: InputMaybe<Scalars['String']>
  key?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>
  value?: InputMaybe<Scalars['JSON']>
}

export interface MutationPerformanceInput {
  _status?: InputMaybe<Performance__Status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['JSON']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface MutationPerformanceUpdateInput {
  _status?: InputMaybe<PerformanceUpdate__Status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['JSON']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface MutationPerformerInput {
  _status?: InputMaybe<Performer__Status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['JSON']>
  image: Scalars['String']
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface MutationPerformerUpdateInput {
  _status?: InputMaybe<PerformerUpdate__Status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['JSON']>
  image?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface MutationSettingInput {
  _status?: InputMaybe<Setting__Status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']>
  now?: InputMaybe<Setting_NowRelationshipInput>
  show?: InputMaybe<Setting_ShowRelationshipInput>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface MutationShowInput {
  _status?: InputMaybe<Show__Status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['JSON']>
  performers?: InputMaybe<Array<InputMaybe<Show_PerformersRelationshipInput>>>
  program?: InputMaybe<Array<InputMaybe<Show_ProgramRelationshipInput>>>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface MutationShowUpdateInput {
  _status?: InputMaybe<ShowUpdate__Status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['JSON']>
  performers?: InputMaybe<Array<InputMaybe<ShowUpdate_PerformersRelationshipInput>>>
  program?: InputMaybe<Array<InputMaybe<ShowUpdate_ProgramRelationshipInput>>>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface MutationSongInput {
  _status?: InputMaybe<Song__Status_MutationInput>
  artists?: InputMaybe<Array<InputMaybe<Song_ArtistsRelationshipInput>>>
  createdAt?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['JSON']>
  lyrics?: InputMaybe<Scalars['JSON']>
  lyricsAuthors?: InputMaybe<Array<InputMaybe<Song_LyricsAuthorsRelationshipInput>>>
  musicAuthors?: InputMaybe<Array<InputMaybe<Song_MusicAuthorsRelationshipInput>>>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface MutationSongUpdateInput {
  _status?: InputMaybe<SongUpdate__Status_MutationInput>
  artists?: InputMaybe<Array<InputMaybe<SongUpdate_ArtistsRelationshipInput>>>
  createdAt?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['JSON']>
  lyrics?: InputMaybe<Scalars['JSON']>
  lyricsAuthors?: InputMaybe<Array<InputMaybe<SongUpdate_LyricsAuthorsRelationshipInput>>>
  musicAuthors?: InputMaybe<Array<InputMaybe<SongUpdate_MusicAuthorsRelationshipInput>>>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface MutationUserInput {
  createdAt?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  hash?: InputMaybe<Scalars['String']>
  lockUntil?: InputMaybe<Scalars['String']>
  loginAttempts?: InputMaybe<Scalars['Float']>
  password: Scalars['String']
  resetPasswordExpiration?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  salt?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface MutationUserUpdateInput {
  createdAt?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  hash?: InputMaybe<Scalars['String']>
  lockUntil?: InputMaybe<Scalars['String']>
  loginAttempts?: InputMaybe<Scalars['Float']>
  password?: InputMaybe<Scalars['String']>
  resetPasswordExpiration?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  salt?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['String']>
}

export interface Payload_PreferencesAccess {
  __typename?: 'payload_preferencesAccess'
  create?: Maybe<PayloadPreferencesCreateAccess>
  delete?: Maybe<PayloadPreferencesDeleteAccess>
  fields?: Maybe<PayloadPreferencesFields>
  read?: Maybe<PayloadPreferencesReadAccess>
  update?: Maybe<PayloadPreferencesUpdateAccess>
}

export interface Payload_PreferencesDocAccess {
  __typename?: 'payload_preferencesDocAccess'
  create?: Maybe<PayloadPreferencesCreateDocAccess>
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>
  fields?: Maybe<PayloadPreferencesDocAccessFields>
  read?: Maybe<PayloadPreferencesReadDocAccess>
  update?: Maybe<PayloadPreferencesUpdateDocAccess>
}

export interface PerformancesAccess {
  __typename?: 'performancesAccess'
  create?: Maybe<PerformancesCreateAccess>
  delete?: Maybe<PerformancesDeleteAccess>
  fields?: Maybe<PerformancesFields>
  read?: Maybe<PerformancesReadAccess>
  readVersions?: Maybe<PerformancesReadVersionsAccess>
  update?: Maybe<PerformancesUpdateAccess>
}

export interface PerformancesDocAccess {
  __typename?: 'performancesDocAccess'
  create?: Maybe<PerformancesCreateDocAccess>
  delete?: Maybe<PerformancesDeleteDocAccess>
  fields?: Maybe<PerformancesDocAccessFields>
  read?: Maybe<PerformancesReadDocAccess>
  readVersions?: Maybe<PerformancesReadVersionsDocAccess>
  update?: Maybe<PerformancesUpdateDocAccess>
}

export interface PerformersAccess {
  __typename?: 'performersAccess'
  create?: Maybe<PerformersCreateAccess>
  delete?: Maybe<PerformersDeleteAccess>
  fields?: Maybe<PerformersFields>
  read?: Maybe<PerformersReadAccess>
  readVersions?: Maybe<PerformersReadVersionsAccess>
  update?: Maybe<PerformersUpdateAccess>
}

export interface PerformersDocAccess {
  __typename?: 'performersDocAccess'
  create?: Maybe<PerformersCreateDocAccess>
  delete?: Maybe<PerformersDeleteDocAccess>
  fields?: Maybe<PerformersDocAccessFields>
  read?: Maybe<PerformersReadDocAccess>
  readVersions?: Maybe<PerformersReadVersionsDocAccess>
  update?: Maybe<PerformersUpdateDocAccess>
}

export interface SettingsAccess {
  __typename?: 'settingsAccess'
  fields?: Maybe<SettingsFields>
  read?: Maybe<SettingsReadAccess>
  readVersions?: Maybe<SettingsReadVersionsAccess>
  update?: Maybe<SettingsUpdateAccess>
}

export interface SettingsDocAccess {
  __typename?: 'settingsDocAccess'
  fields?: Maybe<SettingsDocAccessFields>
  read?: Maybe<SettingsReadDocAccess>
  readVersions?: Maybe<SettingsReadVersionsDocAccess>
  update?: Maybe<SettingsUpdateDocAccess>
}

export interface ShowsAccess {
  __typename?: 'showsAccess'
  create?: Maybe<ShowsCreateAccess>
  delete?: Maybe<ShowsDeleteAccess>
  fields?: Maybe<ShowsFields>
  read?: Maybe<ShowsReadAccess>
  readVersions?: Maybe<ShowsReadVersionsAccess>
  update?: Maybe<ShowsUpdateAccess>
}

export interface ShowsDocAccess {
  __typename?: 'showsDocAccess'
  create?: Maybe<ShowsCreateDocAccess>
  delete?: Maybe<ShowsDeleteDocAccess>
  fields?: Maybe<ShowsDocAccessFields>
  read?: Maybe<ShowsReadDocAccess>
  readVersions?: Maybe<ShowsReadVersionsDocAccess>
  update?: Maybe<ShowsUpdateDocAccess>
}

export interface SongsAccess {
  __typename?: 'songsAccess'
  create?: Maybe<SongsCreateAccess>
  delete?: Maybe<SongsDeleteAccess>
  fields?: Maybe<SongsFields>
  read?: Maybe<SongsReadAccess>
  readVersions?: Maybe<SongsReadVersionsAccess>
  update?: Maybe<SongsUpdateAccess>
}

export interface SongsDocAccess {
  __typename?: 'songsDocAccess'
  create?: Maybe<SongsCreateDocAccess>
  delete?: Maybe<SongsDeleteDocAccess>
  fields?: Maybe<SongsDocAccessFields>
  read?: Maybe<SongsReadDocAccess>
  readVersions?: Maybe<SongsReadVersionsDocAccess>
  update?: Maybe<SongsUpdateDocAccess>
}

export interface UsersAccess {
  __typename?: 'usersAccess'
  create?: Maybe<UsersCreateAccess>
  delete?: Maybe<UsersDeleteAccess>
  fields?: Maybe<UsersFields>
  read?: Maybe<UsersReadAccess>
  unlock?: Maybe<UsersUnlockAccess>
  update?: Maybe<UsersUpdateAccess>
}

export interface UsersDocAccess {
  __typename?: 'usersDocAccess'
  create?: Maybe<UsersCreateDocAccess>
  delete?: Maybe<UsersDeleteDocAccess>
  fields?: Maybe<UsersDocAccessFields>
  read?: Maybe<UsersReadDocAccess>
  unlock?: Maybe<UsersUnlockDocAccess>
  update?: Maybe<UsersUpdateDocAccess>
}

export interface UsersJwt {
  __typename?: 'usersJWT'
  collection: Scalars['String']
  email: Scalars['EmailAddress']
}

export interface UsersLoginResult {
  __typename?: 'usersLoginResult'
  exp?: Maybe<Scalars['Int']>
  token?: Maybe<Scalars['String']>
  user?: Maybe<User>
}

export interface UsersMe {
  __typename?: 'usersMe'
  collection?: Maybe<Scalars['String']>
  exp?: Maybe<Scalars['Int']>
  token?: Maybe<Scalars['String']>
  user?: Maybe<User>
}

export interface UsersRefreshedUser {
  __typename?: 'usersRefreshedUser'
  exp?: Maybe<Scalars['Int']>
  refreshedToken?: Maybe<Scalars['String']>
  user?: Maybe<UsersJwt>
}

export interface UsersResetPassword {
  __typename?: 'usersResetPassword'
  token?: Maybe<Scalars['String']>
  user?: Maybe<User>
}

export interface VersionsArtist_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsArtist_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface VersionsArtist_Latest_Operator {
  equals?: InputMaybe<Scalars['Boolean']>
  exists?: InputMaybe<Scalars['Boolean']>
  not_equals?: InputMaybe<Scalars['Boolean']>
}

export interface VersionsArtist_Parent_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface VersionsArtist_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export enum VersionsArtist_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export interface VersionsArtist_Version___Status_Operator {
  all?: InputMaybe<Array<InputMaybe<VersionsArtist_Version___Status_Input>>>
  equals?: InputMaybe<VersionsArtist_Version___Status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<VersionsArtist_Version___Status_Input>>>
  not_equals?: InputMaybe<VersionsArtist_Version___Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<VersionsArtist_Version___Status_Input>>>
}

export interface VersionsArtist_Version__CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsArtist_Version__Description_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
}

export interface VersionsArtist_Version__Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface VersionsArtist_Version__UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsArtist_Version__Url_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface VersionsArtist_Where {
  AND?: InputMaybe<Array<InputMaybe<VersionsArtist_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsArtist_Where_Or>>>
  createdAt?: InputMaybe<VersionsArtist_CreatedAt_Operator>
  id?: InputMaybe<VersionsArtist_Id_Operator>
  latest?: InputMaybe<VersionsArtist_Latest_Operator>
  parent?: InputMaybe<VersionsArtist_Parent_Operator>
  updatedAt?: InputMaybe<VersionsArtist_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsArtist_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsArtist_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsArtist_Version__Description_Operator>
  version__title?: InputMaybe<VersionsArtist_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsArtist_Version__UpdatedAt_Operator>
  version__url?: InputMaybe<VersionsArtist_Version__Url_Operator>
}

export interface VersionsArtist_Where_And {
  AND?: InputMaybe<Array<InputMaybe<VersionsArtist_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsArtist_Where_Or>>>
  createdAt?: InputMaybe<VersionsArtist_CreatedAt_Operator>
  id?: InputMaybe<VersionsArtist_Id_Operator>
  latest?: InputMaybe<VersionsArtist_Latest_Operator>
  parent?: InputMaybe<VersionsArtist_Parent_Operator>
  updatedAt?: InputMaybe<VersionsArtist_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsArtist_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsArtist_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsArtist_Version__Description_Operator>
  version__title?: InputMaybe<VersionsArtist_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsArtist_Version__UpdatedAt_Operator>
  version__url?: InputMaybe<VersionsArtist_Version__Url_Operator>
}

export interface VersionsArtist_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<VersionsArtist_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsArtist_Where_Or>>>
  createdAt?: InputMaybe<VersionsArtist_CreatedAt_Operator>
  id?: InputMaybe<VersionsArtist_Id_Operator>
  latest?: InputMaybe<VersionsArtist_Latest_Operator>
  parent?: InputMaybe<VersionsArtist_Parent_Operator>
  updatedAt?: InputMaybe<VersionsArtist_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsArtist_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsArtist_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsArtist_Version__Description_Operator>
  version__title?: InputMaybe<VersionsArtist_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsArtist_Version__UpdatedAt_Operator>
  version__url?: InputMaybe<VersionsArtist_Version__Url_Operator>
}

export interface VersionsArtists {
  __typename?: 'versionsArtists'
  docs?: Maybe<Array<Maybe<ArtistVersion>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface VersionsPerformance_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsPerformance_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface VersionsPerformance_Latest_Operator {
  equals?: InputMaybe<Scalars['Boolean']>
  exists?: InputMaybe<Scalars['Boolean']>
  not_equals?: InputMaybe<Scalars['Boolean']>
}

export interface VersionsPerformance_Parent_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface VersionsPerformance_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export enum VersionsPerformance_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export interface VersionsPerformance_Version___Status_Operator {
  all?: InputMaybe<Array<InputMaybe<VersionsPerformance_Version___Status_Input>>>
  equals?: InputMaybe<VersionsPerformance_Version___Status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<VersionsPerformance_Version___Status_Input>>>
  not_equals?: InputMaybe<VersionsPerformance_Version___Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<VersionsPerformance_Version___Status_Input>>>
}

export interface VersionsPerformance_Version__CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsPerformance_Version__Description_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
}

export interface VersionsPerformance_Version__Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface VersionsPerformance_Version__UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsPerformance_Where {
  AND?: InputMaybe<Array<InputMaybe<VersionsPerformance_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsPerformance_Where_Or>>>
  createdAt?: InputMaybe<VersionsPerformance_CreatedAt_Operator>
  id?: InputMaybe<VersionsPerformance_Id_Operator>
  latest?: InputMaybe<VersionsPerformance_Latest_Operator>
  parent?: InputMaybe<VersionsPerformance_Parent_Operator>
  updatedAt?: InputMaybe<VersionsPerformance_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsPerformance_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsPerformance_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsPerformance_Version__Description_Operator>
  version__title?: InputMaybe<VersionsPerformance_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsPerformance_Version__UpdatedAt_Operator>
}

export interface VersionsPerformance_Where_And {
  AND?: InputMaybe<Array<InputMaybe<VersionsPerformance_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsPerformance_Where_Or>>>
  createdAt?: InputMaybe<VersionsPerformance_CreatedAt_Operator>
  id?: InputMaybe<VersionsPerformance_Id_Operator>
  latest?: InputMaybe<VersionsPerformance_Latest_Operator>
  parent?: InputMaybe<VersionsPerformance_Parent_Operator>
  updatedAt?: InputMaybe<VersionsPerformance_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsPerformance_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsPerformance_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsPerformance_Version__Description_Operator>
  version__title?: InputMaybe<VersionsPerformance_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsPerformance_Version__UpdatedAt_Operator>
}

export interface VersionsPerformance_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<VersionsPerformance_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsPerformance_Where_Or>>>
  createdAt?: InputMaybe<VersionsPerformance_CreatedAt_Operator>
  id?: InputMaybe<VersionsPerformance_Id_Operator>
  latest?: InputMaybe<VersionsPerformance_Latest_Operator>
  parent?: InputMaybe<VersionsPerformance_Parent_Operator>
  updatedAt?: InputMaybe<VersionsPerformance_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsPerformance_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsPerformance_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsPerformance_Version__Description_Operator>
  version__title?: InputMaybe<VersionsPerformance_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsPerformance_Version__UpdatedAt_Operator>
}

export interface VersionsPerformances {
  __typename?: 'versionsPerformances'
  docs?: Maybe<Array<Maybe<PerformanceVersion>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface VersionsPerformer_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsPerformer_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface VersionsPerformer_Latest_Operator {
  equals?: InputMaybe<Scalars['Boolean']>
  exists?: InputMaybe<Scalars['Boolean']>
  not_equals?: InputMaybe<Scalars['Boolean']>
}

export interface VersionsPerformer_Parent_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface VersionsPerformer_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export enum VersionsPerformer_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export interface VersionsPerformer_Version___Status_Operator {
  all?: InputMaybe<Array<InputMaybe<VersionsPerformer_Version___Status_Input>>>
  equals?: InputMaybe<VersionsPerformer_Version___Status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<VersionsPerformer_Version___Status_Input>>>
  not_equals?: InputMaybe<VersionsPerformer_Version___Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<VersionsPerformer_Version___Status_Input>>>
}

export interface VersionsPerformer_Version__CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsPerformer_Version__Description_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
}

export interface VersionsPerformer_Version__Image_Operator {
  equals?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
}

export interface VersionsPerformer_Version__Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface VersionsPerformer_Version__UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsPerformer_Where {
  AND?: InputMaybe<Array<InputMaybe<VersionsPerformer_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsPerformer_Where_Or>>>
  createdAt?: InputMaybe<VersionsPerformer_CreatedAt_Operator>
  id?: InputMaybe<VersionsPerformer_Id_Operator>
  latest?: InputMaybe<VersionsPerformer_Latest_Operator>
  parent?: InputMaybe<VersionsPerformer_Parent_Operator>
  updatedAt?: InputMaybe<VersionsPerformer_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsPerformer_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsPerformer_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsPerformer_Version__Description_Operator>
  version__image?: InputMaybe<VersionsPerformer_Version__Image_Operator>
  version__title?: InputMaybe<VersionsPerformer_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsPerformer_Version__UpdatedAt_Operator>
}

export interface VersionsPerformer_Where_And {
  AND?: InputMaybe<Array<InputMaybe<VersionsPerformer_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsPerformer_Where_Or>>>
  createdAt?: InputMaybe<VersionsPerformer_CreatedAt_Operator>
  id?: InputMaybe<VersionsPerformer_Id_Operator>
  latest?: InputMaybe<VersionsPerformer_Latest_Operator>
  parent?: InputMaybe<VersionsPerformer_Parent_Operator>
  updatedAt?: InputMaybe<VersionsPerformer_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsPerformer_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsPerformer_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsPerformer_Version__Description_Operator>
  version__image?: InputMaybe<VersionsPerformer_Version__Image_Operator>
  version__title?: InputMaybe<VersionsPerformer_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsPerformer_Version__UpdatedAt_Operator>
}

export interface VersionsPerformer_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<VersionsPerformer_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsPerformer_Where_Or>>>
  createdAt?: InputMaybe<VersionsPerformer_CreatedAt_Operator>
  id?: InputMaybe<VersionsPerformer_Id_Operator>
  latest?: InputMaybe<VersionsPerformer_Latest_Operator>
  parent?: InputMaybe<VersionsPerformer_Parent_Operator>
  updatedAt?: InputMaybe<VersionsPerformer_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsPerformer_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsPerformer_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsPerformer_Version__Description_Operator>
  version__image?: InputMaybe<VersionsPerformer_Version__Image_Operator>
  version__title?: InputMaybe<VersionsPerformer_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsPerformer_Version__UpdatedAt_Operator>
}

export interface VersionsPerformers {
  __typename?: 'versionsPerformers'
  docs?: Maybe<Array<Maybe<PerformerVersion>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface VersionsSetting {
  __typename?: 'versionsSetting'
  docs?: Maybe<Array<Maybe<SettingVersion>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface VersionsSetting_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsSetting_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface VersionsSetting_Latest_Operator {
  equals?: InputMaybe<Scalars['Boolean']>
  exists?: InputMaybe<Scalars['Boolean']>
  not_equals?: InputMaybe<Scalars['Boolean']>
}

export interface VersionsSetting_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export enum VersionsSetting_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export interface VersionsSetting_Version___Status_Operator {
  all?: InputMaybe<Array<InputMaybe<VersionsSetting_Version___Status_Input>>>
  equals?: InputMaybe<VersionsSetting_Version___Status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<VersionsSetting_Version___Status_Input>>>
  not_equals?: InputMaybe<VersionsSetting_Version___Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<VersionsSetting_Version___Status_Input>>>
}

export interface VersionsSetting_Version__CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsSetting_Version__Now_Relation {
  relationTo?: InputMaybe<VersionsSetting_Version__Now_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum VersionsSetting_Version__Now_Relation_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export interface VersionsSetting_Version__Show_Relation {
  relationTo?: InputMaybe<VersionsSetting_Version__Show_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum VersionsSetting_Version__Show_Relation_RelationTo {
  Shows = 'shows'
}

export interface VersionsSetting_Version__UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsSetting_Where {
  AND?: InputMaybe<Array<InputMaybe<VersionsSetting_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsSetting_Where_Or>>>
  createdAt?: InputMaybe<VersionsSetting_CreatedAt_Operator>
  id?: InputMaybe<VersionsSetting_Id_Operator>
  latest?: InputMaybe<VersionsSetting_Latest_Operator>
  updatedAt?: InputMaybe<VersionsSetting_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsSetting_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsSetting_Version__CreatedAt_Operator>
  version__now?: InputMaybe<VersionsSetting_Version__Now_Relation>
  version__show?: InputMaybe<VersionsSetting_Version__Show_Relation>
  version__updatedAt?: InputMaybe<VersionsSetting_Version__UpdatedAt_Operator>
}

export interface VersionsSetting_Where_And {
  AND?: InputMaybe<Array<InputMaybe<VersionsSetting_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsSetting_Where_Or>>>
  createdAt?: InputMaybe<VersionsSetting_CreatedAt_Operator>
  id?: InputMaybe<VersionsSetting_Id_Operator>
  latest?: InputMaybe<VersionsSetting_Latest_Operator>
  updatedAt?: InputMaybe<VersionsSetting_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsSetting_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsSetting_Version__CreatedAt_Operator>
  version__now?: InputMaybe<VersionsSetting_Version__Now_Relation>
  version__show?: InputMaybe<VersionsSetting_Version__Show_Relation>
  version__updatedAt?: InputMaybe<VersionsSetting_Version__UpdatedAt_Operator>
}

export interface VersionsSetting_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<VersionsSetting_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsSetting_Where_Or>>>
  createdAt?: InputMaybe<VersionsSetting_CreatedAt_Operator>
  id?: InputMaybe<VersionsSetting_Id_Operator>
  latest?: InputMaybe<VersionsSetting_Latest_Operator>
  updatedAt?: InputMaybe<VersionsSetting_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsSetting_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsSetting_Version__CreatedAt_Operator>
  version__now?: InputMaybe<VersionsSetting_Version__Now_Relation>
  version__show?: InputMaybe<VersionsSetting_Version__Show_Relation>
  version__updatedAt?: InputMaybe<VersionsSetting_Version__UpdatedAt_Operator>
}

export interface VersionsShow_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsShow_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface VersionsShow_Latest_Operator {
  equals?: InputMaybe<Scalars['Boolean']>
  exists?: InputMaybe<Scalars['Boolean']>
  not_equals?: InputMaybe<Scalars['Boolean']>
}

export interface VersionsShow_Parent_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface VersionsShow_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export enum VersionsShow_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export interface VersionsShow_Version___Status_Operator {
  all?: InputMaybe<Array<InputMaybe<VersionsShow_Version___Status_Input>>>
  equals?: InputMaybe<VersionsShow_Version___Status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<VersionsShow_Version___Status_Input>>>
  not_equals?: InputMaybe<VersionsShow_Version___Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<VersionsShow_Version___Status_Input>>>
}

export interface VersionsShow_Version__CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsShow_Version__Description_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
}

export interface VersionsShow_Version__Performers_Relation {
  relationTo?: InputMaybe<VersionsShow_Version__Performers_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum VersionsShow_Version__Performers_Relation_RelationTo {
  Performers = 'performers'
}

export interface VersionsShow_Version__Program_Relation {
  relationTo?: InputMaybe<VersionsShow_Version__Program_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum VersionsShow_Version__Program_Relation_RelationTo {
  Performances = 'performances',
  Songs = 'songs'
}

export interface VersionsShow_Version__Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface VersionsShow_Version__UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsShow_Where {
  AND?: InputMaybe<Array<InputMaybe<VersionsShow_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsShow_Where_Or>>>
  createdAt?: InputMaybe<VersionsShow_CreatedAt_Operator>
  id?: InputMaybe<VersionsShow_Id_Operator>
  latest?: InputMaybe<VersionsShow_Latest_Operator>
  parent?: InputMaybe<VersionsShow_Parent_Operator>
  updatedAt?: InputMaybe<VersionsShow_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsShow_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsShow_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsShow_Version__Description_Operator>
  version__performers?: InputMaybe<VersionsShow_Version__Performers_Relation>
  version__program?: InputMaybe<VersionsShow_Version__Program_Relation>
  version__title?: InputMaybe<VersionsShow_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsShow_Version__UpdatedAt_Operator>
}

export interface VersionsShow_Where_And {
  AND?: InputMaybe<Array<InputMaybe<VersionsShow_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsShow_Where_Or>>>
  createdAt?: InputMaybe<VersionsShow_CreatedAt_Operator>
  id?: InputMaybe<VersionsShow_Id_Operator>
  latest?: InputMaybe<VersionsShow_Latest_Operator>
  parent?: InputMaybe<VersionsShow_Parent_Operator>
  updatedAt?: InputMaybe<VersionsShow_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsShow_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsShow_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsShow_Version__Description_Operator>
  version__performers?: InputMaybe<VersionsShow_Version__Performers_Relation>
  version__program?: InputMaybe<VersionsShow_Version__Program_Relation>
  version__title?: InputMaybe<VersionsShow_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsShow_Version__UpdatedAt_Operator>
}

export interface VersionsShow_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<VersionsShow_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsShow_Where_Or>>>
  createdAt?: InputMaybe<VersionsShow_CreatedAt_Operator>
  id?: InputMaybe<VersionsShow_Id_Operator>
  latest?: InputMaybe<VersionsShow_Latest_Operator>
  parent?: InputMaybe<VersionsShow_Parent_Operator>
  updatedAt?: InputMaybe<VersionsShow_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsShow_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsShow_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsShow_Version__Description_Operator>
  version__performers?: InputMaybe<VersionsShow_Version__Performers_Relation>
  version__program?: InputMaybe<VersionsShow_Version__Program_Relation>
  version__title?: InputMaybe<VersionsShow_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsShow_Version__UpdatedAt_Operator>
}

export interface VersionsShows {
  __typename?: 'versionsShows'
  docs?: Maybe<Array<Maybe<ShowVersion>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface VersionsSong_CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsSong_Id_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface VersionsSong_Latest_Operator {
  equals?: InputMaybe<Scalars['Boolean']>
  exists?: InputMaybe<Scalars['Boolean']>
  not_equals?: InputMaybe<Scalars['Boolean']>
}

export interface VersionsSong_Parent_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  not_equals?: InputMaybe<Scalars['JSON']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export interface VersionsSong_UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export enum VersionsSong_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export interface VersionsSong_Version___Status_Operator {
  all?: InputMaybe<Array<InputMaybe<VersionsSong_Version___Status_Input>>>
  equals?: InputMaybe<VersionsSong_Version___Status_Input>
  exists?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<VersionsSong_Version___Status_Input>>>
  not_equals?: InputMaybe<VersionsSong_Version___Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<VersionsSong_Version___Status_Input>>>
}

export interface VersionsSong_Version__Artists_Relation {
  relationTo?: InputMaybe<VersionsSong_Version__Artists_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum VersionsSong_Version__Artists_Relation_RelationTo {
  Artists = 'artists'
}

export interface VersionsSong_Version__CreatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsSong_Version__Description_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
}

export interface VersionsSong_Version__LyricsAuthors_Relation {
  relationTo?: InputMaybe<VersionsSong_Version__LyricsAuthors_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum VersionsSong_Version__LyricsAuthors_Relation_RelationTo {
  Artists = 'artists'
}

export interface VersionsSong_Version__Lyrics_Operator {
  contains?: InputMaybe<Scalars['JSON']>
  equals?: InputMaybe<Scalars['JSON']>
  exists?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['JSON']>
  not_equals?: InputMaybe<Scalars['JSON']>
}

export interface VersionsSong_Version__MusicAuthors_Relation {
  relationTo?: InputMaybe<VersionsSong_Version__MusicAuthors_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']>
}

export enum VersionsSong_Version__MusicAuthors_Relation_RelationTo {
  Artists = 'artists'
}

export interface VersionsSong_Version__Title_Operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  like?: InputMaybe<Scalars['String']>
  not_equals?: InputMaybe<Scalars['String']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export interface VersionsSong_Version__UpdatedAt_Operator {
  equals?: InputMaybe<Scalars['DateTime']>
  exists?: InputMaybe<Scalars['Boolean']>
  greater_than?: InputMaybe<Scalars['DateTime']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']>
  less_than?: InputMaybe<Scalars['DateTime']>
  less_than_equal?: InputMaybe<Scalars['DateTime']>
  like?: InputMaybe<Scalars['DateTime']>
  not_equals?: InputMaybe<Scalars['DateTime']>
}

export interface VersionsSong_Where {
  AND?: InputMaybe<Array<InputMaybe<VersionsSong_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsSong_Where_Or>>>
  createdAt?: InputMaybe<VersionsSong_CreatedAt_Operator>
  id?: InputMaybe<VersionsSong_Id_Operator>
  latest?: InputMaybe<VersionsSong_Latest_Operator>
  parent?: InputMaybe<VersionsSong_Parent_Operator>
  updatedAt?: InputMaybe<VersionsSong_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsSong_Version___Status_Operator>
  version__artists?: InputMaybe<VersionsSong_Version__Artists_Relation>
  version__createdAt?: InputMaybe<VersionsSong_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsSong_Version__Description_Operator>
  version__lyrics?: InputMaybe<VersionsSong_Version__Lyrics_Operator>
  version__lyricsAuthors?: InputMaybe<VersionsSong_Version__LyricsAuthors_Relation>
  version__musicAuthors?: InputMaybe<VersionsSong_Version__MusicAuthors_Relation>
  version__title?: InputMaybe<VersionsSong_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsSong_Version__UpdatedAt_Operator>
}

export interface VersionsSong_Where_And {
  AND?: InputMaybe<Array<InputMaybe<VersionsSong_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsSong_Where_Or>>>
  createdAt?: InputMaybe<VersionsSong_CreatedAt_Operator>
  id?: InputMaybe<VersionsSong_Id_Operator>
  latest?: InputMaybe<VersionsSong_Latest_Operator>
  parent?: InputMaybe<VersionsSong_Parent_Operator>
  updatedAt?: InputMaybe<VersionsSong_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsSong_Version___Status_Operator>
  version__artists?: InputMaybe<VersionsSong_Version__Artists_Relation>
  version__createdAt?: InputMaybe<VersionsSong_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsSong_Version__Description_Operator>
  version__lyrics?: InputMaybe<VersionsSong_Version__Lyrics_Operator>
  version__lyricsAuthors?: InputMaybe<VersionsSong_Version__LyricsAuthors_Relation>
  version__musicAuthors?: InputMaybe<VersionsSong_Version__MusicAuthors_Relation>
  version__title?: InputMaybe<VersionsSong_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsSong_Version__UpdatedAt_Operator>
}

export interface VersionsSong_Where_Or {
  AND?: InputMaybe<Array<InputMaybe<VersionsSong_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsSong_Where_Or>>>
  createdAt?: InputMaybe<VersionsSong_CreatedAt_Operator>
  id?: InputMaybe<VersionsSong_Id_Operator>
  latest?: InputMaybe<VersionsSong_Latest_Operator>
  parent?: InputMaybe<VersionsSong_Parent_Operator>
  updatedAt?: InputMaybe<VersionsSong_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsSong_Version___Status_Operator>
  version__artists?: InputMaybe<VersionsSong_Version__Artists_Relation>
  version__createdAt?: InputMaybe<VersionsSong_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsSong_Version__Description_Operator>
  version__lyrics?: InputMaybe<VersionsSong_Version__Lyrics_Operator>
  version__lyricsAuthors?: InputMaybe<VersionsSong_Version__LyricsAuthors_Relation>
  version__musicAuthors?: InputMaybe<VersionsSong_Version__MusicAuthors_Relation>
  version__title?: InputMaybe<VersionsSong_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsSong_Version__UpdatedAt_Operator>
}

export interface VersionsSongs {
  __typename?: 'versionsSongs'
  docs?: Maybe<Array<Maybe<SongVersion>>>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPrevPage?: Maybe<Scalars['Boolean']>
  limit?: Maybe<Scalars['Int']>
  nextPage?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  pagingCounter?: Maybe<Scalars['Int']>
  prevPage?: Maybe<Scalars['Int']>
  totalDocs?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export interface ArtistSummaryFragment { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null }

export interface ImageFragment { __typename?: 'Media', id?: string | null, title?: string | null, url?: string | null, alt?: string | null, mimeType?: string | null }

export interface PerformanceFragment { __typename?: 'Performance', id?: string | null, title?: string | null, description?: any | null }

export interface PerformanceSummaryFragment { __typename?: 'Performance', id?: string | null, title?: string | null, description?: any | null }

export interface SongFragment { __typename?: 'Song', id?: string | null, title?: string | null, description?: any | null, lyrics?: any | null, artists?: Array<{ __typename?: 'Song_Artists_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null, lyricsAuthors?: Array<{ __typename?: 'Song_LyricsAuthors_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null, musicAuthors?: Array<{ __typename?: 'Song_MusicAuthors_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null }

export interface SongSummaryFragment { __typename?: 'Song', id?: string | null, title?: string | null, description?: any | null }

export type NowSettingQueryVariables = Exact<{ [key: string]: never }>

export interface NowSettingQuery { __typename?: 'Query', Setting?: { __typename?: 'Setting', now?: { __typename?: 'Setting_Now_Relationship', value?: { __typename: 'Performance', id?: string | null, title?: string | null, description?: any | null } | { __typename: 'Song', id?: string | null, title?: string | null, description?: any | null, lyrics?: any | null, artists?: Array<{ __typename?: 'Song_Artists_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null, lyricsAuthors?: Array<{ __typename?: 'Song_LyricsAuthors_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null, musicAuthors?: Array<{ __typename?: 'Song_MusicAuthors_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null } | null } | null } | null }

export type PerformanceQueryVariables = Exact<{
  performanceId: Scalars['String']
}>

export interface PerformanceQuery { __typename?: 'Query', Performance?: { __typename?: 'Performance', id?: string | null, title?: string | null, description?: any | null } | null }

export type ShowDescriptionQueryVariables = Exact<{
  showId: Scalars['String']
}>

export interface ShowDescriptionQuery { __typename?: 'Query', Show?: { __typename?: 'Show', title?: string | null, description?: any | null } | null }

export type ShowPerformersQueryVariables = Exact<{
  showId: Scalars['String']
}>

export interface ShowPerformersQuery { __typename?: 'Query', Show?: { __typename?: 'Show', performers?: Array<{ __typename?: 'Show_Performers_Relationship', value?: { __typename?: 'Performer', id?: string | null, title?: string | null, description?: any | null, image?: { __typename?: 'Media', id?: string | null, title?: string | null, url?: string | null, alt?: string | null, mimeType?: string | null } | null } | null }> | null } | null }

export type ShowProgramQueryVariables = Exact<{
  showId: Scalars['String']
}>

export interface ShowProgramQuery { __typename?: 'Query', Show?: { __typename?: 'Show', program?: Array<{ __typename?: 'Show_Program_Relationship', value?: { __typename: 'Performance', id?: string | null, title?: string | null, description?: any | null } | { __typename: 'Song', id?: string | null, title?: string | null, description?: any | null } | null }> | null } | null }

export type ShowSettingQueryVariables = Exact<{ [key: string]: never }>

export interface ShowSettingQuery { __typename?: 'Query', Setting?: { __typename?: 'Setting', show?: { __typename?: 'Setting_Show_Relationship', value?: { __typename: 'Show', id?: string | null } | null } | null } | null }

export type SongQueryVariables = Exact<{
  songId: Scalars['String']
}>

export interface SongQuery { __typename?: 'Query', Song?: { __typename?: 'Song', id?: string | null, title?: string | null, description?: any | null, lyrics?: any | null, artists?: Array<{ __typename?: 'Song_Artists_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null, lyricsAuthors?: Array<{ __typename?: 'Song_LyricsAuthors_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null, musicAuthors?: Array<{ __typename?: 'Song_MusicAuthors_Relationship', value?: { __typename?: 'Artist', id?: string | null, title?: string | null, url?: string | null } | null }> | null } | null }

export const ImageFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'Image' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Media' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }, { kind: 'Field', name: { kind: 'Name', value: 'url' } }, { kind: 'Field', name: { kind: 'Name', value: 'alt' } }, { kind: 'Field', name: { kind: 'Name', value: 'mimeType' } }] } }] } as unknown as DocumentNode<ImageFragment, unknown>
export const PerformanceFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'Performance' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Performance' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }, { kind: 'Field', name: { kind: 'Name', value: 'description' } }] } }] } as unknown as DocumentNode<PerformanceFragment, unknown>
export const PerformanceSummaryFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'PerformanceSummary' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Performance' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }, { kind: 'Field', name: { kind: 'Name', value: 'description' } }] } }] } as unknown as DocumentNode<PerformanceSummaryFragment, unknown>
export const ArtistSummaryFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'ArtistSummary' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Artist' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }, { kind: 'Field', name: { kind: 'Name', value: 'url' } }] } }] } as unknown as DocumentNode<ArtistSummaryFragment, unknown>
export const SongFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'Song' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Song' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }, { kind: 'Field', name: { kind: 'Name', value: 'description' } }, { kind: 'Field', name: { kind: 'Name', value: 'artists' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ArtistSummary' } }] } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'lyricsAuthors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ArtistSummary' } }] } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'musicAuthors' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'ArtistSummary' } }] } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'lyrics' } }] } }] } as unknown as DocumentNode<SongFragment, unknown>
export const SongSummaryFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'SongSummary' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Song' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }, { kind: 'Field', name: { kind: 'Name', value: 'description' } }] } }] } as unknown as DocumentNode<SongSummaryFragment, unknown>
export const NowSettingDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'NowSetting' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'Setting' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'draft' }, value: { kind: 'BooleanValue', value: false } }, { kind: 'Argument', name: { kind: 'Name', value: 'locale' }, value: { kind: 'EnumValue', value: 'en' } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'now' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: '__typename' } }, { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Song' } }, { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Performance' } }] } }] } }] } }] } }, ...SongFragmentDoc.definitions, ...ArtistSummaryFragmentDoc.definitions, ...PerformanceFragmentDoc.definitions] } as unknown as DocumentNode<NowSettingQuery, NowSettingQueryVariables>
export const PerformanceDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'Performance' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'performanceId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'Performance' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'performanceId' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'draft' }, value: { kind: 'BooleanValue', value: false } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Performance' } }] } }] } }, ...PerformanceFragmentDoc.definitions] } as unknown as DocumentNode<PerformanceQuery, PerformanceQueryVariables>
export const ShowDescriptionDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'ShowDescription' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'showId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'Show' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'showId' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'draft' }, value: { kind: 'BooleanValue', value: false } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'title' } }, { kind: 'Field', name: { kind: 'Name', value: 'description' } }] } }] } }] } as unknown as DocumentNode<ShowDescriptionQuery, ShowDescriptionQueryVariables>
export const ShowPerformersDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'ShowPerformers' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'showId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'Show' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'showId' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'draft' }, value: { kind: 'BooleanValue', value: false } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'performers' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'InlineFragment', typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Performer' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'title' } }, { kind: 'Field', name: { kind: 'Name', value: 'description' } }, { kind: 'Field', name: { kind: 'Name', value: 'image' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }] } }] } }] } }] } }] } }] } }, ...ImageFragmentDoc.definitions] } as unknown as DocumentNode<ShowPerformersQuery, ShowPerformersQueryVariables>
export const ShowProgramDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'ShowProgram' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'showId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'Show' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'showId' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'draft' }, value: { kind: 'BooleanValue', value: false } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'program' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: '__typename' } }, { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PerformanceSummary' } }, { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SongSummary' } }] } }] } }] } }] } }, ...PerformanceSummaryFragmentDoc.definitions, ...SongSummaryFragmentDoc.definitions] } as unknown as DocumentNode<ShowProgramQuery, ShowProgramQueryVariables>
export const ShowSettingDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'ShowSetting' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'Setting' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'draft' }, value: { kind: 'BooleanValue', value: false } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'show' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: '__typename' } }, { kind: 'InlineFragment', typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Show' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }] } }] } }] } }] } }] } }] } as unknown as DocumentNode<ShowSettingQuery, ShowSettingQueryVariables>
export const SongDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'Song' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'songId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'Song' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'id' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'songId' } } }, { kind: 'Argument', name: { kind: 'Name', value: 'draft' }, value: { kind: 'BooleanValue', value: false } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Song' } }] } }] } }, ...SongFragmentDoc.definitions, ...ArtistSummaryFragmentDoc.definitions] } as unknown as DocumentNode<SongQuery, SongQueryVariables>
