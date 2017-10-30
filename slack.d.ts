// generated from scripts/generate-types

namespace Api.Test {
  export interface Params {
    
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Apps.Permissions.Info {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Apps.Permissions.Request {
  export interface Params {
    token: any;
    scopes: any;
    trigger_id: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Auth.Revoke {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Auth.Test {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Bots.Info {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.Archive {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.Create {
  export interface Params {
    token: any;
    name: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.History {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.Info {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.Invite {
  export interface Params {
    token: any;
    channel: any;
    user: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.Join {
  export interface Params {
    token: any;
    name: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.Kick {
  export interface Params {
    token: any;
    channel: any;
    user: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.Leave {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.List {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.Mark {
  export interface Params {
    token: any;
    channel: any;
    ts: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.Rename {
  export interface Params {
    token: any;
    channel: any;
    name: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.Replies {
  export interface Params {
    token: any;
    channel: any;
    thread_ts: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.SetPurpose {
  export interface Params {
    token: any;
    channel: any;
    purpose: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.SetTopic {
  export interface Params {
    token: any;
    channel: any;
    topic: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Channels.Unarchive {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Chat.Delete {
  export interface Params {
    token: any;
    channel: any;
    ts: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Chat.MeMessage {
  export interface Params {
    token: any;
    channel: any;
    text: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Chat.PostEphemeral {
  export interface Params {
    token: any;
    channel: any;
    text: any;
    user: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Chat.PostMessage {
  export interface Params {
    token: any;
    channel: any;
    text: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Chat.Unfurl {
  export interface Params {
    token: any;
    channel: any;
    ts: any;
    unfurls: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Chat.Update {
  export interface Params {
    token: any;
    channel: any;
    text: any;
    ts: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Archive {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Close {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Create {
  export interface Params {
    token: any;
    name: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.History {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Info {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Invite {
  export interface Params {
    token: any;
    channel: any;
    users: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Join {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Kick {
  export interface Params {
    token: any;
    channel: any;
    user: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Leave {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.List {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Members {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Open {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Rename {
  export interface Params {
    token: any;
    channel: any;
    name: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Replies {
  export interface Params {
    token: any;
    channel: any;
    ts: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.SetPurpose {
  export interface Params {
    token: any;
    channel: any;
    purpose: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.SetTopic {
  export interface Params {
    token: any;
    channel: any;
    topic: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Conversations.Unarchive {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Dialog.Open {
  export interface Params {
    token: any;
    dialog: any;
    trigger_id: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Dnd.EndDnd {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Dnd.EndSnooze {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Dnd.Info {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Dnd.SetSnooze {
  export interface Params {
    token: any;
    num_minutes: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Dnd.TeamInfo {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Emoji.List {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Files.Comments.Add {
  export interface Params {
    token: any;
    comment: any;
    file: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Files.Comments.Delete {
  export interface Params {
    token: any;
    file: any;
    id: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Files.Comments.Edit {
  export interface Params {
    token: any;
    comment: any;
    file: any;
    id: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Files.Delete {
  export interface Params {
    token: any;
    file: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Files.Info {
  export interface Params {
    token: any;
    file: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Files.List {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Files.RevokePublicURL {
  export interface Params {
    token: any;
    file: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Files.SharedPublicURL {
  export interface Params {
    token: any;
    file: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Files.Upload {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.Archive {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.Create {
  export interface Params {
    token: any;
    name: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.CreateChild {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.History {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.Info {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.Invite {
  export interface Params {
    token: any;
    channel: any;
    user: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.Kick {
  export interface Params {
    token: any;
    channel: any;
    user: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.Leave {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.List {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.Mark {
  export interface Params {
    token: any;
    channel: any;
    ts: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.Open {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.Rename {
  export interface Params {
    token: any;
    channel: any;
    name: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.Replies {
  export interface Params {
    token: any;
    channel: any;
    thread_ts: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.SetPurpose {
  export interface Params {
    token: any;
    channel: any;
    purpose: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.SetTopic {
  export interface Params {
    token: any;
    channel: any;
    topic: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Groups.Unarchive {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Im.Close {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Im.History {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Im.List {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Im.Mark {
  export interface Params {
    token: any;
    channel: any;
    ts: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Im.Open {
  export interface Params {
    token: any;
    user: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Im.Replies {
  export interface Params {
    token: any;
    channel: any;
    thread_ts: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Mpim.Close {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Mpim.History {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Mpim.List {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Mpim.Mark {
  export interface Params {
    token: any;
    channel: any;
    ts: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Mpim.Open {
  export interface Params {
    token: any;
    users: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Mpim.Replies {
  export interface Params {
    token: any;
    channel: any;
    thread_ts: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Oauth.Access {
  export interface Params {
    client_id: any;
    client_secret: any;
    code: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Oauth.Token {
  export interface Params {
    client_id: any;
    client_secret: any;
    code: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Pins.Add {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Pins.List {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Pins.Remove {
  export interface Params {
    token: any;
    channel: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Reactions.Add {
  export interface Params {
    token: any;
    name: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Reactions.Get {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Reactions.List {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Reactions.Remove {
  export interface Params {
    token: any;
    name: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Reminders.Add {
  export interface Params {
    token: any;
    text: any;
    time: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Reminders.Complete {
  export interface Params {
    token: any;
    reminder: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Reminders.Delete {
  export interface Params {
    token: any;
    reminder: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Reminders.Info {
  export interface Params {
    token: any;
    reminder: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Reminders.List {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Rtm.Connect {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Rtm.Start {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Search.All {
  export interface Params {
    token: any;
    query: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Search.Files {
  export interface Params {
    token: any;
    query: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Search.Messages {
  export interface Params {
    token: any;
    query: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Stars.Add {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Stars.List {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Stars.Remove {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Team.AccessLogs {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Team.BillableInfo {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Team.Info {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Team.IntegrationLogs {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Team.Profile.Get {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Usergroups.Create {
  export interface Params {
    token: any;
    name: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Usergroups.Disable {
  export interface Params {
    token: any;
    usergroup: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Usergroups.Enable {
  export interface Params {
    token: any;
    usergroup: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Usergroups.List {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Usergroups.Update {
  export interface Params {
    token: any;
    usergroup: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Usergroups.Users.List {
  export interface Params {
    token: any;
    usergroup: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Usergroups.Users.Update {
  export interface Params {
    token: any;
    usergroup: any;
    users: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Users.DeletePhoto {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Users.GetPresence {
  export interface Params {
    token: any;
    user: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Users.Identity {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Users.Info {
  export interface Params {
    token: any;
    user: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Users.List {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Users.SetActive {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Users.SetPhoto {
  export interface Params {
    token: any;
    image: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Users.SetPresence {
  export interface Params {
    token: any;
    presence: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Users.Profile.Get {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

namespace Users.Profile.Set {
  export interface Params {
    token: any;
  }
  
  export interface Response {
    ok: boolean;
    [key: string]: any;
  }
}

declare module "slack" {
  export let api: {
    test: {
      test(params: Api.Test.Params): Promise<Api.Test.Response>;
      test(params: Api.Test.Params, callback: (err, response: Api.Test.Response) => void): void;
    };
  }
  
  export let apps: {
    permissions: {
      request: {
        request(params: Apps.Permissions.Request.Params): Promise<Apps.Permissions.Request.Response>;
        request(params: Apps.Permissions.Request.Params, callback: (err, response: Apps.Permissions.Request.Response) => void): void;
      };
    };
  }
  
  export let auth: {
    test: {
      test(params: Auth.Test.Params): Promise<Auth.Test.Response>;
      test(params: Auth.Test.Params, callback: (err, response: Auth.Test.Response) => void): void;
    };
  }
  
  export let bots: {
    info: {
      info(params: Bots.Info.Params): Promise<Bots.Info.Response>;
      info(params: Bots.Info.Params, callback: (err, response: Bots.Info.Response) => void): void;
    };
  }
  
  export let channels: {
    unarchive: {
      unarchive(params: Channels.Unarchive.Params): Promise<Channels.Unarchive.Response>;
      unarchive(params: Channels.Unarchive.Params, callback: (err, response: Channels.Unarchive.Response) => void): void;
    };
  }
  
  export let chat: {
    update: {
      update(params: Chat.Update.Params): Promise<Chat.Update.Response>;
      update(params: Chat.Update.Params, callback: (err, response: Chat.Update.Response) => void): void;
    };
  }
  
  export let conversations: {
    unarchive: {
      unarchive(params: Conversations.Unarchive.Params): Promise<Conversations.Unarchive.Response>;
      unarchive(params: Conversations.Unarchive.Params, callback: (err, response: Conversations.Unarchive.Response) => void): void;
    };
  }
  
  export let dialog: {
    open: {
      open(params: Dialog.Open.Params): Promise<Dialog.Open.Response>;
      open(params: Dialog.Open.Params, callback: (err, response: Dialog.Open.Response) => void): void;
    };
  }
  
  export let dnd: {
    teamInfo: {
      teamInfo(params: Dnd.TeamInfo.Params): Promise<Dnd.TeamInfo.Response>;
      teamInfo(params: Dnd.TeamInfo.Params, callback: (err, response: Dnd.TeamInfo.Response) => void): void;
    };
  }
  
  export let emoji: {
    list: {
      list(params: Emoji.List.Params): Promise<Emoji.List.Response>;
      list(params: Emoji.List.Params, callback: (err, response: Emoji.List.Response) => void): void;
    };
  }
  
  export let files: {
    upload: {
      upload(params: Files.Upload.Params): Promise<Files.Upload.Response>;
      upload(params: Files.Upload.Params, callback: (err, response: Files.Upload.Response) => void): void;
    };
  }
  
  export let groups: {
    unarchive: {
      unarchive(params: Groups.Unarchive.Params): Promise<Groups.Unarchive.Response>;
      unarchive(params: Groups.Unarchive.Params, callback: (err, response: Groups.Unarchive.Response) => void): void;
    };
  }
  
  export let im: {
    replies: {
      replies(params: Im.Replies.Params): Promise<Im.Replies.Response>;
      replies(params: Im.Replies.Params, callback: (err, response: Im.Replies.Response) => void): void;
    };
  }
  
  export let mpim: {
    replies: {
      replies(params: Mpim.Replies.Params): Promise<Mpim.Replies.Response>;
      replies(params: Mpim.Replies.Params, callback: (err, response: Mpim.Replies.Response) => void): void;
    };
  }
  
  export let oauth: {
    token: {
      token(params: Oauth.Token.Params): Promise<Oauth.Token.Response>;
      token(params: Oauth.Token.Params, callback: (err, response: Oauth.Token.Response) => void): void;
    };
  }
  
  export let pins: {
    remove: {
      remove(params: Pins.Remove.Params): Promise<Pins.Remove.Response>;
      remove(params: Pins.Remove.Params, callback: (err, response: Pins.Remove.Response) => void): void;
    };
  }
  
  export let reactions: {
    remove: {
      remove(params: Reactions.Remove.Params): Promise<Reactions.Remove.Response>;
      remove(params: Reactions.Remove.Params, callback: (err, response: Reactions.Remove.Response) => void): void;
    };
  }
  
  export let reminders: {
    list: {
      list(params: Reminders.List.Params): Promise<Reminders.List.Response>;
      list(params: Reminders.List.Params, callback: (err, response: Reminders.List.Response) => void): void;
    };
  }
  
  export let rtm: {
    start: {
      start(params: Rtm.Start.Params): Promise<Rtm.Start.Response>;
      start(params: Rtm.Start.Params, callback: (err, response: Rtm.Start.Response) => void): void;
    };
  }
  
  export let search: {
    messages: {
      messages(params: Search.Messages.Params): Promise<Search.Messages.Response>;
      messages(params: Search.Messages.Params, callback: (err, response: Search.Messages.Response) => void): void;
    };
  }
  
  export let stars: {
    remove: {
      remove(params: Stars.Remove.Params): Promise<Stars.Remove.Response>;
      remove(params: Stars.Remove.Params, callback: (err, response: Stars.Remove.Response) => void): void;
    };
  }
  
  export let team: {
    profile: {
      get: {
        get(params: Team.Profile.Get.Params): Promise<Team.Profile.Get.Response>;
        get(params: Team.Profile.Get.Params, callback: (err, response: Team.Profile.Get.Response) => void): void;
      };
    };
  }
  
  export let usergroups: {
    users: {
      update: {
        update(params: Usergroups.Users.Update.Params): Promise<Usergroups.Users.Update.Response>;
        update(params: Usergroups.Users.Update.Params, callback: (err, response: Usergroups.Users.Update.Response) => void): void;
      };
    };
  }
  
  export let users: {
    profile: {
      set: {
        set(params: Users.Profile.Set.Params): Promise<Users.Profile.Set.Response>;
        set(params: Users.Profile.Set.Params, callback: (err, response: Users.Profile.Set.Response) => void): void;
      };
    };
  }
}