// generated from scripts/generate-types

declare namespace SlackAPI {
  export interface Params {
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Api.Test {
  export interface Params extends SlackAPI.Params {
    
  }
}

declare namespace Apps.Permissions.Info {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Apps.Permissions.Request {
  export interface Params extends SlackAPI.Params {
    token?: any
    scopes: any
    trigger_id: any
  }
}

declare namespace Auth.Revoke {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Auth.Test {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Bots.Info {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Channels.Archive {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Channels.Create {
  export interface Params extends SlackAPI.Params {
    token?: any
    name: any
  }
}

declare namespace Channels.History {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Channels.Info {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Channels.Invite {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    user: any
  }
}

declare namespace Channels.Join {
  export interface Params extends SlackAPI.Params {
    token?: any
    name: any
  }
}

declare namespace Channels.Kick {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    user: any
  }
}

declare namespace Channels.Leave {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Channels.List {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Channels.Mark {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    ts: any
  }
}

declare namespace Channels.Rename {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    name: any
  }
}

declare namespace Channels.Replies {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    thread_ts: any
  }
}

declare namespace Channels.SetPurpose {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    purpose: any
  }
}

declare namespace Channels.SetTopic {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    topic: any
  }
}

declare namespace Channels.Unarchive {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Chat.Delete {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    ts: any
  }
}

declare namespace Chat.GetPermalink {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    message_ts: any
  }
}

declare namespace Chat.MeMessage {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    text: any
  }
}

declare namespace Chat.PostEphemeral {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    text: any
    user: any
  }
}

declare namespace Chat.PostMessage {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    text: any
  }
}

declare namespace Chat.Unfurl {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    ts: any
    unfurls: any
  }
}

declare namespace Chat.Update {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    text: any
    ts: any
  }
}

declare namespace Conversations.Archive {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.Close {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.Create {
  export interface Params extends SlackAPI.Params {
    token?: any
    name: any
  }
}

declare namespace Conversations.History {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.Info {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.Invite {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    users: any
  }
}

declare namespace Conversations.Join {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.Kick {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    user: any
  }
}

declare namespace Conversations.Leave {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.List {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Conversations.Members {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.Open {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Conversations.Rename {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    name: any
  }
}

declare namespace Conversations.Replies {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    ts: any
  }
}

declare namespace Conversations.SetPurpose {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    purpose: any
  }
}

declare namespace Conversations.SetTopic {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    topic: any
  }
}

declare namespace Conversations.Unarchive {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Dialog.Open {
  export interface Params extends SlackAPI.Params {
    token?: any
    dialog: any
    trigger_id: any
  }
}

declare namespace Dnd.EndDnd {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Dnd.EndSnooze {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Dnd.Info {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Dnd.SetSnooze {
  export interface Params extends SlackAPI.Params {
    token?: any
    num_minutes: any
  }
}

declare namespace Dnd.TeamInfo {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Emoji.List {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Files.Comments.Add {
  export interface Params extends SlackAPI.Params {
    token?: any
    comment: any
    file: any
  }
}

declare namespace Files.Comments.Delete {
  export interface Params extends SlackAPI.Params {
    token?: any
    file: any
    id: any
  }
}

declare namespace Files.Comments.Edit {
  export interface Params extends SlackAPI.Params {
    token?: any
    comment: any
    file: any
    id: any
  }
}

declare namespace Files.Delete {
  export interface Params extends SlackAPI.Params {
    token?: any
    file: any
  }
}

declare namespace Files.Info {
  export interface Params extends SlackAPI.Params {
    token?: any
    file: any
  }
}

declare namespace Files.List {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Files.RevokePublicURL {
  export interface Params extends SlackAPI.Params {
    token?: any
    file: any
  }
}

declare namespace Files.SharedPublicURL {
  export interface Params extends SlackAPI.Params {
    token?: any
    file: any
  }
}

declare namespace Files.Upload {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Groups.Archive {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Groups.Create {
  export interface Params extends SlackAPI.Params {
    token?: any
    name: any
  }
}

declare namespace Groups.CreateChild {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Groups.History {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Groups.Info {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Groups.Invite {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    user: any
  }
}

declare namespace Groups.Kick {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    user: any
  }
}

declare namespace Groups.Leave {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Groups.List {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Groups.Mark {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    ts: any
  }
}

declare namespace Groups.Open {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Groups.Rename {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    name: any
  }
}

declare namespace Groups.Replies {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    thread_ts: any
  }
}

declare namespace Groups.SetPurpose {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    purpose: any
  }
}

declare namespace Groups.SetTopic {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    topic: any
  }
}

declare namespace Groups.Unarchive {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Im.Close {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Im.History {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Im.List {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Im.Mark {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    ts: any
  }
}

declare namespace Im.Open {
  export interface Params extends SlackAPI.Params {
    token?: any
    user: any
  }
}

declare namespace Im.Replies {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    thread_ts: any
  }
}

declare namespace Migration.Exchange {
  export interface Params extends SlackAPI.Params {
    token?: any
    users: any
  }
}

declare namespace Mpim.Close {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Mpim.History {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Mpim.List {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Mpim.Mark {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    ts: any
  }
}

declare namespace Mpim.Open {
  export interface Params extends SlackAPI.Params {
    token?: any
    users: any
  }
}

declare namespace Mpim.Replies {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
    thread_ts: any
  }
}

declare namespace Oauth.Access {
  export interface Params extends SlackAPI.Params {
    client_id: any
    client_secret: any
    code: any
  }
}

declare namespace Oauth.Token {
  export interface Params extends SlackAPI.Params {
    client_id: any
    client_secret: any
    code: any
  }
}

declare namespace Pins.Add {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Pins.List {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Pins.Remove {
  export interface Params extends SlackAPI.Params {
    token?: any
    channel: any
  }
}

declare namespace Reactions.Add {
  export interface Params extends SlackAPI.Params {
    token?: any
    name: any
  }
}

declare namespace Reactions.Get {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Reactions.List {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Reactions.Remove {
  export interface Params extends SlackAPI.Params {
    token?: any
    name: any
  }
}

declare namespace Reminders.Add {
  export interface Params extends SlackAPI.Params {
    token?: any
    text: any
    time: any
  }
}

declare namespace Reminders.Complete {
  export interface Params extends SlackAPI.Params {
    token?: any
    reminder: any
  }
}

declare namespace Reminders.Delete {
  export interface Params extends SlackAPI.Params {
    token?: any
    reminder: any
  }
}

declare namespace Reminders.Info {
  export interface Params extends SlackAPI.Params {
    token?: any
    reminder: any
  }
}

declare namespace Reminders.List {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Rtm.Connect {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Rtm.Start {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Search.All {
  export interface Params extends SlackAPI.Params {
    token?: any
    query: any
  }
}

declare namespace Search.Files {
  export interface Params extends SlackAPI.Params {
    token?: any
    query: any
  }
}

declare namespace Search.Messages {
  export interface Params extends SlackAPI.Params {
    token?: any
    query: any
  }
}

declare namespace Stars.Add {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Stars.List {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Stars.Remove {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Team.AccessLogs {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Team.BillableInfo {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Team.Info {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Team.IntegrationLogs {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Team.Profile.Get {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Usergroups.Create {
  export interface Params extends SlackAPI.Params {
    token?: any
    name: any
  }
}

declare namespace Usergroups.Disable {
  export interface Params extends SlackAPI.Params {
    token?: any
    usergroup: any
  }
}

declare namespace Usergroups.Enable {
  export interface Params extends SlackAPI.Params {
    token?: any
    usergroup: any
  }
}

declare namespace Usergroups.List {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Usergroups.Update {
  export interface Params extends SlackAPI.Params {
    token?: any
    usergroup: any
  }
}

declare namespace Usergroups.Users.List {
  export interface Params extends SlackAPI.Params {
    token?: any
    usergroup: any
  }
}

declare namespace Usergroups.Users.Update {
  export interface Params extends SlackAPI.Params {
    token?: any
    usergroup: any
    users: any
  }
}

declare namespace Users.DeletePhoto {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Users.GetPresence {
  export interface Params extends SlackAPI.Params {
    token?: any
    user: any
  }
}

declare namespace Users.Identity {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Users.Info {
  export interface Params extends SlackAPI.Params {
    token?: any
    user: any
  }
}

declare namespace Users.List {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Users.LookupByEmail {
  export interface Params extends SlackAPI.Params {
    token?: any
    email: any
  }
}

declare namespace Users.SetActive {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Users.SetPhoto {
  export interface Params extends SlackAPI.Params {
    token?: any
    image: any
  }
}

declare namespace Users.SetPresence {
  export interface Params extends SlackAPI.Params {
    token?: any
    presence: any
  }
}

declare namespace Users.Profile.Get {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare namespace Users.Profile.Set {
  export interface Params extends SlackAPI.Params {
    token?: any
  }
}

declare module "slack" {
  export = class Slack {
    token: string;
    constructor(token): void;
    static api = {
      test(params: Api.Test.Params): Promise<SlackAPI.Response>
      test(params: Api.Test.Params, callback: (params: SlackAPI.Response) => void): void
    };
    api = {
      test(params: Api.Test.Params): Promise<SlackAPI.Response>
      test(params: Api.Test.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static apps = {
      permissions: {
        info(params: Apps.Permissions.Info.Params): Promise<SlackAPI.Response>
        info(params: Apps.Permissions.Info.Params, callback: (params: SlackAPI.Response) => void): void
        request(params: Apps.Permissions.Request.Params): Promise<SlackAPI.Response>
        request(params: Apps.Permissions.Request.Params, callback: (params: SlackAPI.Response) => void): void
      }
    };
    apps = {
      permissions: {
        info(params: Apps.Permissions.Info.Params): Promise<SlackAPI.Response>
        info(params: Apps.Permissions.Info.Params, callback: (params: SlackAPI.Response) => void): void
        request(params: Apps.Permissions.Request.Params): Promise<SlackAPI.Response>
        request(params: Apps.Permissions.Request.Params, callback: (params: SlackAPI.Response) => void): void
      }
    };
    static auth = {
      revoke(params: Auth.Revoke.Params): Promise<SlackAPI.Response>
      revoke(params: Auth.Revoke.Params, callback: (params: SlackAPI.Response) => void): void
      test(params: Auth.Test.Params): Promise<SlackAPI.Response>
      test(params: Auth.Test.Params, callback: (params: SlackAPI.Response) => void): void
    };
    auth = {
      revoke(params: Auth.Revoke.Params): Promise<SlackAPI.Response>
      revoke(params: Auth.Revoke.Params, callback: (params: SlackAPI.Response) => void): void
      test(params: Auth.Test.Params): Promise<SlackAPI.Response>
      test(params: Auth.Test.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static bots = {
      info(params: Bots.Info.Params): Promise<SlackAPI.Response>
      info(params: Bots.Info.Params, callback: (params: SlackAPI.Response) => void): void
    };
    bots = {
      info(params: Bots.Info.Params): Promise<SlackAPI.Response>
      info(params: Bots.Info.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static channels = {
      archive(params: Channels.Archive.Params): Promise<SlackAPI.Response>
      archive(params: Channels.Archive.Params, callback: (params: SlackAPI.Response) => void): void
      create(params: Channels.Create.Params): Promise<SlackAPI.Response>
      create(params: Channels.Create.Params, callback: (params: SlackAPI.Response) => void): void
      history(params: Channels.History.Params): Promise<SlackAPI.Response>
      history(params: Channels.History.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Channels.Info.Params): Promise<SlackAPI.Response>
      info(params: Channels.Info.Params, callback: (params: SlackAPI.Response) => void): void
      invite(params: Channels.Invite.Params): Promise<SlackAPI.Response>
      invite(params: Channels.Invite.Params, callback: (params: SlackAPI.Response) => void): void
      join(params: Channels.Join.Params): Promise<SlackAPI.Response>
      join(params: Channels.Join.Params, callback: (params: SlackAPI.Response) => void): void
      kick(params: Channels.Kick.Params): Promise<SlackAPI.Response>
      kick(params: Channels.Kick.Params, callback: (params: SlackAPI.Response) => void): void
      leave(params: Channels.Leave.Params): Promise<SlackAPI.Response>
      leave(params: Channels.Leave.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Channels.List.Params): Promise<SlackAPI.Response>
      list(params: Channels.List.Params, callback: (params: SlackAPI.Response) => void): void
      mark(params: Channels.Mark.Params): Promise<SlackAPI.Response>
      mark(params: Channels.Mark.Params, callback: (params: SlackAPI.Response) => void): void
      rename(params: Channels.Rename.Params): Promise<SlackAPI.Response>
      rename(params: Channels.Rename.Params, callback: (params: SlackAPI.Response) => void): void
      replies(params: Channels.Replies.Params): Promise<SlackAPI.Response>
      replies(params: Channels.Replies.Params, callback: (params: SlackAPI.Response) => void): void
      setPurpose(params: Channels.SetPurpose.Params): Promise<SlackAPI.Response>
      setPurpose(params: Channels.SetPurpose.Params, callback: (params: SlackAPI.Response) => void): void
      setTopic(params: Channels.SetTopic.Params): Promise<SlackAPI.Response>
      setTopic(params: Channels.SetTopic.Params, callback: (params: SlackAPI.Response) => void): void
      unarchive(params: Channels.Unarchive.Params): Promise<SlackAPI.Response>
      unarchive(params: Channels.Unarchive.Params, callback: (params: SlackAPI.Response) => void): void
    };
    channels = {
      archive(params: Channels.Archive.Params): Promise<SlackAPI.Response>
      archive(params: Channels.Archive.Params, callback: (params: SlackAPI.Response) => void): void
      create(params: Channels.Create.Params): Promise<SlackAPI.Response>
      create(params: Channels.Create.Params, callback: (params: SlackAPI.Response) => void): void
      history(params: Channels.History.Params): Promise<SlackAPI.Response>
      history(params: Channels.History.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Channels.Info.Params): Promise<SlackAPI.Response>
      info(params: Channels.Info.Params, callback: (params: SlackAPI.Response) => void): void
      invite(params: Channels.Invite.Params): Promise<SlackAPI.Response>
      invite(params: Channels.Invite.Params, callback: (params: SlackAPI.Response) => void): void
      join(params: Channels.Join.Params): Promise<SlackAPI.Response>
      join(params: Channels.Join.Params, callback: (params: SlackAPI.Response) => void): void
      kick(params: Channels.Kick.Params): Promise<SlackAPI.Response>
      kick(params: Channels.Kick.Params, callback: (params: SlackAPI.Response) => void): void
      leave(params: Channels.Leave.Params): Promise<SlackAPI.Response>
      leave(params: Channels.Leave.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Channels.List.Params): Promise<SlackAPI.Response>
      list(params: Channels.List.Params, callback: (params: SlackAPI.Response) => void): void
      mark(params: Channels.Mark.Params): Promise<SlackAPI.Response>
      mark(params: Channels.Mark.Params, callback: (params: SlackAPI.Response) => void): void
      rename(params: Channels.Rename.Params): Promise<SlackAPI.Response>
      rename(params: Channels.Rename.Params, callback: (params: SlackAPI.Response) => void): void
      replies(params: Channels.Replies.Params): Promise<SlackAPI.Response>
      replies(params: Channels.Replies.Params, callback: (params: SlackAPI.Response) => void): void
      setPurpose(params: Channels.SetPurpose.Params): Promise<SlackAPI.Response>
      setPurpose(params: Channels.SetPurpose.Params, callback: (params: SlackAPI.Response) => void): void
      setTopic(params: Channels.SetTopic.Params): Promise<SlackAPI.Response>
      setTopic(params: Channels.SetTopic.Params, callback: (params: SlackAPI.Response) => void): void
      unarchive(params: Channels.Unarchive.Params): Promise<SlackAPI.Response>
      unarchive(params: Channels.Unarchive.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static chat = {
      delete(params: Chat.Delete.Params): Promise<SlackAPI.Response>
      delete(params: Chat.Delete.Params, callback: (params: SlackAPI.Response) => void): void
      getPermalink(params: Chat.GetPermalink.Params): Promise<SlackAPI.Response>
      getPermalink(params: Chat.GetPermalink.Params, callback: (params: SlackAPI.Response) => void): void
      meMessage(params: Chat.MeMessage.Params): Promise<SlackAPI.Response>
      meMessage(params: Chat.MeMessage.Params, callback: (params: SlackAPI.Response) => void): void
      postEphemeral(params: Chat.PostEphemeral.Params): Promise<SlackAPI.Response>
      postEphemeral(params: Chat.PostEphemeral.Params, callback: (params: SlackAPI.Response) => void): void
      postMessage(params: Chat.PostMessage.Params): Promise<SlackAPI.Response>
      postMessage(params: Chat.PostMessage.Params, callback: (params: SlackAPI.Response) => void): void
      unfurl(params: Chat.Unfurl.Params): Promise<SlackAPI.Response>
      unfurl(params: Chat.Unfurl.Params, callback: (params: SlackAPI.Response) => void): void
      update(params: Chat.Update.Params): Promise<SlackAPI.Response>
      update(params: Chat.Update.Params, callback: (params: SlackAPI.Response) => void): void
    };
    chat = {
      delete(params: Chat.Delete.Params): Promise<SlackAPI.Response>
      delete(params: Chat.Delete.Params, callback: (params: SlackAPI.Response) => void): void
      getPermalink(params: Chat.GetPermalink.Params): Promise<SlackAPI.Response>
      getPermalink(params: Chat.GetPermalink.Params, callback: (params: SlackAPI.Response) => void): void
      meMessage(params: Chat.MeMessage.Params): Promise<SlackAPI.Response>
      meMessage(params: Chat.MeMessage.Params, callback: (params: SlackAPI.Response) => void): void
      postEphemeral(params: Chat.PostEphemeral.Params): Promise<SlackAPI.Response>
      postEphemeral(params: Chat.PostEphemeral.Params, callback: (params: SlackAPI.Response) => void): void
      postMessage(params: Chat.PostMessage.Params): Promise<SlackAPI.Response>
      postMessage(params: Chat.PostMessage.Params, callback: (params: SlackAPI.Response) => void): void
      unfurl(params: Chat.Unfurl.Params): Promise<SlackAPI.Response>
      unfurl(params: Chat.Unfurl.Params, callback: (params: SlackAPI.Response) => void): void
      update(params: Chat.Update.Params): Promise<SlackAPI.Response>
      update(params: Chat.Update.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static conversations = {
      archive(params: Conversations.Archive.Params): Promise<SlackAPI.Response>
      archive(params: Conversations.Archive.Params, callback: (params: SlackAPI.Response) => void): void
      close(params: Conversations.Close.Params): Promise<SlackAPI.Response>
      close(params: Conversations.Close.Params, callback: (params: SlackAPI.Response) => void): void
      create(params: Conversations.Create.Params): Promise<SlackAPI.Response>
      create(params: Conversations.Create.Params, callback: (params: SlackAPI.Response) => void): void
      history(params: Conversations.History.Params): Promise<SlackAPI.Response>
      history(params: Conversations.History.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Conversations.Info.Params): Promise<SlackAPI.Response>
      info(params: Conversations.Info.Params, callback: (params: SlackAPI.Response) => void): void
      invite(params: Conversations.Invite.Params): Promise<SlackAPI.Response>
      invite(params: Conversations.Invite.Params, callback: (params: SlackAPI.Response) => void): void
      join(params: Conversations.Join.Params): Promise<SlackAPI.Response>
      join(params: Conversations.Join.Params, callback: (params: SlackAPI.Response) => void): void
      kick(params: Conversations.Kick.Params): Promise<SlackAPI.Response>
      kick(params: Conversations.Kick.Params, callback: (params: SlackAPI.Response) => void): void
      leave(params: Conversations.Leave.Params): Promise<SlackAPI.Response>
      leave(params: Conversations.Leave.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Conversations.List.Params): Promise<SlackAPI.Response>
      list(params: Conversations.List.Params, callback: (params: SlackAPI.Response) => void): void
      members(params: Conversations.Members.Params): Promise<SlackAPI.Response>
      members(params: Conversations.Members.Params, callback: (params: SlackAPI.Response) => void): void
      open(params: Conversations.Open.Params): Promise<SlackAPI.Response>
      open(params: Conversations.Open.Params, callback: (params: SlackAPI.Response) => void): void
      rename(params: Conversations.Rename.Params): Promise<SlackAPI.Response>
      rename(params: Conversations.Rename.Params, callback: (params: SlackAPI.Response) => void): void
      replies(params: Conversations.Replies.Params): Promise<SlackAPI.Response>
      replies(params: Conversations.Replies.Params, callback: (params: SlackAPI.Response) => void): void
      setPurpose(params: Conversations.SetPurpose.Params): Promise<SlackAPI.Response>
      setPurpose(params: Conversations.SetPurpose.Params, callback: (params: SlackAPI.Response) => void): void
      setTopic(params: Conversations.SetTopic.Params): Promise<SlackAPI.Response>
      setTopic(params: Conversations.SetTopic.Params, callback: (params: SlackAPI.Response) => void): void
      unarchive(params: Conversations.Unarchive.Params): Promise<SlackAPI.Response>
      unarchive(params: Conversations.Unarchive.Params, callback: (params: SlackAPI.Response) => void): void
    };
    conversations = {
      archive(params: Conversations.Archive.Params): Promise<SlackAPI.Response>
      archive(params: Conversations.Archive.Params, callback: (params: SlackAPI.Response) => void): void
      close(params: Conversations.Close.Params): Promise<SlackAPI.Response>
      close(params: Conversations.Close.Params, callback: (params: SlackAPI.Response) => void): void
      create(params: Conversations.Create.Params): Promise<SlackAPI.Response>
      create(params: Conversations.Create.Params, callback: (params: SlackAPI.Response) => void): void
      history(params: Conversations.History.Params): Promise<SlackAPI.Response>
      history(params: Conversations.History.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Conversations.Info.Params): Promise<SlackAPI.Response>
      info(params: Conversations.Info.Params, callback: (params: SlackAPI.Response) => void): void
      invite(params: Conversations.Invite.Params): Promise<SlackAPI.Response>
      invite(params: Conversations.Invite.Params, callback: (params: SlackAPI.Response) => void): void
      join(params: Conversations.Join.Params): Promise<SlackAPI.Response>
      join(params: Conversations.Join.Params, callback: (params: SlackAPI.Response) => void): void
      kick(params: Conversations.Kick.Params): Promise<SlackAPI.Response>
      kick(params: Conversations.Kick.Params, callback: (params: SlackAPI.Response) => void): void
      leave(params: Conversations.Leave.Params): Promise<SlackAPI.Response>
      leave(params: Conversations.Leave.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Conversations.List.Params): Promise<SlackAPI.Response>
      list(params: Conversations.List.Params, callback: (params: SlackAPI.Response) => void): void
      members(params: Conversations.Members.Params): Promise<SlackAPI.Response>
      members(params: Conversations.Members.Params, callback: (params: SlackAPI.Response) => void): void
      open(params: Conversations.Open.Params): Promise<SlackAPI.Response>
      open(params: Conversations.Open.Params, callback: (params: SlackAPI.Response) => void): void
      rename(params: Conversations.Rename.Params): Promise<SlackAPI.Response>
      rename(params: Conversations.Rename.Params, callback: (params: SlackAPI.Response) => void): void
      replies(params: Conversations.Replies.Params): Promise<SlackAPI.Response>
      replies(params: Conversations.Replies.Params, callback: (params: SlackAPI.Response) => void): void
      setPurpose(params: Conversations.SetPurpose.Params): Promise<SlackAPI.Response>
      setPurpose(params: Conversations.SetPurpose.Params, callback: (params: SlackAPI.Response) => void): void
      setTopic(params: Conversations.SetTopic.Params): Promise<SlackAPI.Response>
      setTopic(params: Conversations.SetTopic.Params, callback: (params: SlackAPI.Response) => void): void
      unarchive(params: Conversations.Unarchive.Params): Promise<SlackAPI.Response>
      unarchive(params: Conversations.Unarchive.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static dialog = {
      open(params: Dialog.Open.Params): Promise<SlackAPI.Response>
      open(params: Dialog.Open.Params, callback: (params: SlackAPI.Response) => void): void
    };
    dialog = {
      open(params: Dialog.Open.Params): Promise<SlackAPI.Response>
      open(params: Dialog.Open.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static dnd = {
      endDnd(params: Dnd.EndDnd.Params): Promise<SlackAPI.Response>
      endDnd(params: Dnd.EndDnd.Params, callback: (params: SlackAPI.Response) => void): void
      endSnooze(params: Dnd.EndSnooze.Params): Promise<SlackAPI.Response>
      endSnooze(params: Dnd.EndSnooze.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Dnd.Info.Params): Promise<SlackAPI.Response>
      info(params: Dnd.Info.Params, callback: (params: SlackAPI.Response) => void): void
      setSnooze(params: Dnd.SetSnooze.Params): Promise<SlackAPI.Response>
      setSnooze(params: Dnd.SetSnooze.Params, callback: (params: SlackAPI.Response) => void): void
      teamInfo(params: Dnd.TeamInfo.Params): Promise<SlackAPI.Response>
      teamInfo(params: Dnd.TeamInfo.Params, callback: (params: SlackAPI.Response) => void): void
    };
    dnd = {
      endDnd(params: Dnd.EndDnd.Params): Promise<SlackAPI.Response>
      endDnd(params: Dnd.EndDnd.Params, callback: (params: SlackAPI.Response) => void): void
      endSnooze(params: Dnd.EndSnooze.Params): Promise<SlackAPI.Response>
      endSnooze(params: Dnd.EndSnooze.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Dnd.Info.Params): Promise<SlackAPI.Response>
      info(params: Dnd.Info.Params, callback: (params: SlackAPI.Response) => void): void
      setSnooze(params: Dnd.SetSnooze.Params): Promise<SlackAPI.Response>
      setSnooze(params: Dnd.SetSnooze.Params, callback: (params: SlackAPI.Response) => void): void
      teamInfo(params: Dnd.TeamInfo.Params): Promise<SlackAPI.Response>
      teamInfo(params: Dnd.TeamInfo.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static emoji = {
      list(params: Emoji.List.Params): Promise<SlackAPI.Response>
      list(params: Emoji.List.Params, callback: (params: SlackAPI.Response) => void): void
    };
    emoji = {
      list(params: Emoji.List.Params): Promise<SlackAPI.Response>
      list(params: Emoji.List.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static files = {
      comments: {
        add(params: Files.Comments.Add.Params): Promise<SlackAPI.Response>
        add(params: Files.Comments.Add.Params, callback: (params: SlackAPI.Response) => void): void
        delete(params: Files.Comments.Delete.Params): Promise<SlackAPI.Response>
        delete(params: Files.Comments.Delete.Params, callback: (params: SlackAPI.Response) => void): void
        edit(params: Files.Comments.Edit.Params): Promise<SlackAPI.Response>
        edit(params: Files.Comments.Edit.Params, callback: (params: SlackAPI.Response) => void): void
      }
      delete(params: Files.Delete.Params): Promise<SlackAPI.Response>
      delete(params: Files.Delete.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Files.Info.Params): Promise<SlackAPI.Response>
      info(params: Files.Info.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Files.List.Params): Promise<SlackAPI.Response>
      list(params: Files.List.Params, callback: (params: SlackAPI.Response) => void): void
      revokePublicURL(params: Files.RevokePublicURL.Params): Promise<SlackAPI.Response>
      revokePublicURL(params: Files.RevokePublicURL.Params, callback: (params: SlackAPI.Response) => void): void
      sharedPublicURL(params: Files.SharedPublicURL.Params): Promise<SlackAPI.Response>
      sharedPublicURL(params: Files.SharedPublicURL.Params, callback: (params: SlackAPI.Response) => void): void
      upload(params: Files.Upload.Params): Promise<SlackAPI.Response>
      upload(params: Files.Upload.Params, callback: (params: SlackAPI.Response) => void): void
    };
    files = {
      comments: {
        add(params: Files.Comments.Add.Params): Promise<SlackAPI.Response>
        add(params: Files.Comments.Add.Params, callback: (params: SlackAPI.Response) => void): void
        delete(params: Files.Comments.Delete.Params): Promise<SlackAPI.Response>
        delete(params: Files.Comments.Delete.Params, callback: (params: SlackAPI.Response) => void): void
        edit(params: Files.Comments.Edit.Params): Promise<SlackAPI.Response>
        edit(params: Files.Comments.Edit.Params, callback: (params: SlackAPI.Response) => void): void
      }
      delete(params: Files.Delete.Params): Promise<SlackAPI.Response>
      delete(params: Files.Delete.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Files.Info.Params): Promise<SlackAPI.Response>
      info(params: Files.Info.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Files.List.Params): Promise<SlackAPI.Response>
      list(params: Files.List.Params, callback: (params: SlackAPI.Response) => void): void
      revokePublicURL(params: Files.RevokePublicURL.Params): Promise<SlackAPI.Response>
      revokePublicURL(params: Files.RevokePublicURL.Params, callback: (params: SlackAPI.Response) => void): void
      sharedPublicURL(params: Files.SharedPublicURL.Params): Promise<SlackAPI.Response>
      sharedPublicURL(params: Files.SharedPublicURL.Params, callback: (params: SlackAPI.Response) => void): void
      upload(params: Files.Upload.Params): Promise<SlackAPI.Response>
      upload(params: Files.Upload.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static groups = {
      archive(params: Groups.Archive.Params): Promise<SlackAPI.Response>
      archive(params: Groups.Archive.Params, callback: (params: SlackAPI.Response) => void): void
      create(params: Groups.Create.Params): Promise<SlackAPI.Response>
      create(params: Groups.Create.Params, callback: (params: SlackAPI.Response) => void): void
      createChild(params: Groups.CreateChild.Params): Promise<SlackAPI.Response>
      createChild(params: Groups.CreateChild.Params, callback: (params: SlackAPI.Response) => void): void
      history(params: Groups.History.Params): Promise<SlackAPI.Response>
      history(params: Groups.History.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Groups.Info.Params): Promise<SlackAPI.Response>
      info(params: Groups.Info.Params, callback: (params: SlackAPI.Response) => void): void
      invite(params: Groups.Invite.Params): Promise<SlackAPI.Response>
      invite(params: Groups.Invite.Params, callback: (params: SlackAPI.Response) => void): void
      kick(params: Groups.Kick.Params): Promise<SlackAPI.Response>
      kick(params: Groups.Kick.Params, callback: (params: SlackAPI.Response) => void): void
      leave(params: Groups.Leave.Params): Promise<SlackAPI.Response>
      leave(params: Groups.Leave.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Groups.List.Params): Promise<SlackAPI.Response>
      list(params: Groups.List.Params, callback: (params: SlackAPI.Response) => void): void
      mark(params: Groups.Mark.Params): Promise<SlackAPI.Response>
      mark(params: Groups.Mark.Params, callback: (params: SlackAPI.Response) => void): void
      open(params: Groups.Open.Params): Promise<SlackAPI.Response>
      open(params: Groups.Open.Params, callback: (params: SlackAPI.Response) => void): void
      rename(params: Groups.Rename.Params): Promise<SlackAPI.Response>
      rename(params: Groups.Rename.Params, callback: (params: SlackAPI.Response) => void): void
      replies(params: Groups.Replies.Params): Promise<SlackAPI.Response>
      replies(params: Groups.Replies.Params, callback: (params: SlackAPI.Response) => void): void
      setPurpose(params: Groups.SetPurpose.Params): Promise<SlackAPI.Response>
      setPurpose(params: Groups.SetPurpose.Params, callback: (params: SlackAPI.Response) => void): void
      setTopic(params: Groups.SetTopic.Params): Promise<SlackAPI.Response>
      setTopic(params: Groups.SetTopic.Params, callback: (params: SlackAPI.Response) => void): void
      unarchive(params: Groups.Unarchive.Params): Promise<SlackAPI.Response>
      unarchive(params: Groups.Unarchive.Params, callback: (params: SlackAPI.Response) => void): void
    };
    groups = {
      archive(params: Groups.Archive.Params): Promise<SlackAPI.Response>
      archive(params: Groups.Archive.Params, callback: (params: SlackAPI.Response) => void): void
      create(params: Groups.Create.Params): Promise<SlackAPI.Response>
      create(params: Groups.Create.Params, callback: (params: SlackAPI.Response) => void): void
      createChild(params: Groups.CreateChild.Params): Promise<SlackAPI.Response>
      createChild(params: Groups.CreateChild.Params, callback: (params: SlackAPI.Response) => void): void
      history(params: Groups.History.Params): Promise<SlackAPI.Response>
      history(params: Groups.History.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Groups.Info.Params): Promise<SlackAPI.Response>
      info(params: Groups.Info.Params, callback: (params: SlackAPI.Response) => void): void
      invite(params: Groups.Invite.Params): Promise<SlackAPI.Response>
      invite(params: Groups.Invite.Params, callback: (params: SlackAPI.Response) => void): void
      kick(params: Groups.Kick.Params): Promise<SlackAPI.Response>
      kick(params: Groups.Kick.Params, callback: (params: SlackAPI.Response) => void): void
      leave(params: Groups.Leave.Params): Promise<SlackAPI.Response>
      leave(params: Groups.Leave.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Groups.List.Params): Promise<SlackAPI.Response>
      list(params: Groups.List.Params, callback: (params: SlackAPI.Response) => void): void
      mark(params: Groups.Mark.Params): Promise<SlackAPI.Response>
      mark(params: Groups.Mark.Params, callback: (params: SlackAPI.Response) => void): void
      open(params: Groups.Open.Params): Promise<SlackAPI.Response>
      open(params: Groups.Open.Params, callback: (params: SlackAPI.Response) => void): void
      rename(params: Groups.Rename.Params): Promise<SlackAPI.Response>
      rename(params: Groups.Rename.Params, callback: (params: SlackAPI.Response) => void): void
      replies(params: Groups.Replies.Params): Promise<SlackAPI.Response>
      replies(params: Groups.Replies.Params, callback: (params: SlackAPI.Response) => void): void
      setPurpose(params: Groups.SetPurpose.Params): Promise<SlackAPI.Response>
      setPurpose(params: Groups.SetPurpose.Params, callback: (params: SlackAPI.Response) => void): void
      setTopic(params: Groups.SetTopic.Params): Promise<SlackAPI.Response>
      setTopic(params: Groups.SetTopic.Params, callback: (params: SlackAPI.Response) => void): void
      unarchive(params: Groups.Unarchive.Params): Promise<SlackAPI.Response>
      unarchive(params: Groups.Unarchive.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static im = {
      close(params: Im.Close.Params): Promise<SlackAPI.Response>
      close(params: Im.Close.Params, callback: (params: SlackAPI.Response) => void): void
      history(params: Im.History.Params): Promise<SlackAPI.Response>
      history(params: Im.History.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Im.List.Params): Promise<SlackAPI.Response>
      list(params: Im.List.Params, callback: (params: SlackAPI.Response) => void): void
      mark(params: Im.Mark.Params): Promise<SlackAPI.Response>
      mark(params: Im.Mark.Params, callback: (params: SlackAPI.Response) => void): void
      open(params: Im.Open.Params): Promise<SlackAPI.Response>
      open(params: Im.Open.Params, callback: (params: SlackAPI.Response) => void): void
      replies(params: Im.Replies.Params): Promise<SlackAPI.Response>
      replies(params: Im.Replies.Params, callback: (params: SlackAPI.Response) => void): void
    };
    im = {
      close(params: Im.Close.Params): Promise<SlackAPI.Response>
      close(params: Im.Close.Params, callback: (params: SlackAPI.Response) => void): void
      history(params: Im.History.Params): Promise<SlackAPI.Response>
      history(params: Im.History.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Im.List.Params): Promise<SlackAPI.Response>
      list(params: Im.List.Params, callback: (params: SlackAPI.Response) => void): void
      mark(params: Im.Mark.Params): Promise<SlackAPI.Response>
      mark(params: Im.Mark.Params, callback: (params: SlackAPI.Response) => void): void
      open(params: Im.Open.Params): Promise<SlackAPI.Response>
      open(params: Im.Open.Params, callback: (params: SlackAPI.Response) => void): void
      replies(params: Im.Replies.Params): Promise<SlackAPI.Response>
      replies(params: Im.Replies.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static migration = {
      exchange(params: Migration.Exchange.Params): Promise<SlackAPI.Response>
      exchange(params: Migration.Exchange.Params, callback: (params: SlackAPI.Response) => void): void
    };
    migration = {
      exchange(params: Migration.Exchange.Params): Promise<SlackAPI.Response>
      exchange(params: Migration.Exchange.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static mpim = {
      close(params: Mpim.Close.Params): Promise<SlackAPI.Response>
      close(params: Mpim.Close.Params, callback: (params: SlackAPI.Response) => void): void
      history(params: Mpim.History.Params): Promise<SlackAPI.Response>
      history(params: Mpim.History.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Mpim.List.Params): Promise<SlackAPI.Response>
      list(params: Mpim.List.Params, callback: (params: SlackAPI.Response) => void): void
      mark(params: Mpim.Mark.Params): Promise<SlackAPI.Response>
      mark(params: Mpim.Mark.Params, callback: (params: SlackAPI.Response) => void): void
      open(params: Mpim.Open.Params): Promise<SlackAPI.Response>
      open(params: Mpim.Open.Params, callback: (params: SlackAPI.Response) => void): void
      replies(params: Mpim.Replies.Params): Promise<SlackAPI.Response>
      replies(params: Mpim.Replies.Params, callback: (params: SlackAPI.Response) => void): void
    };
    mpim = {
      close(params: Mpim.Close.Params): Promise<SlackAPI.Response>
      close(params: Mpim.Close.Params, callback: (params: SlackAPI.Response) => void): void
      history(params: Mpim.History.Params): Promise<SlackAPI.Response>
      history(params: Mpim.History.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Mpim.List.Params): Promise<SlackAPI.Response>
      list(params: Mpim.List.Params, callback: (params: SlackAPI.Response) => void): void
      mark(params: Mpim.Mark.Params): Promise<SlackAPI.Response>
      mark(params: Mpim.Mark.Params, callback: (params: SlackAPI.Response) => void): void
      open(params: Mpim.Open.Params): Promise<SlackAPI.Response>
      open(params: Mpim.Open.Params, callback: (params: SlackAPI.Response) => void): void
      replies(params: Mpim.Replies.Params): Promise<SlackAPI.Response>
      replies(params: Mpim.Replies.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static oauth = {
      access(params: Oauth.Access.Params): Promise<SlackAPI.Response>
      access(params: Oauth.Access.Params, callback: (params: SlackAPI.Response) => void): void
      token(params: Oauth.Token.Params): Promise<SlackAPI.Response>
      token(params: Oauth.Token.Params, callback: (params: SlackAPI.Response) => void): void
    };
    oauth = {
      access(params: Oauth.Access.Params): Promise<SlackAPI.Response>
      access(params: Oauth.Access.Params, callback: (params: SlackAPI.Response) => void): void
      token(params: Oauth.Token.Params): Promise<SlackAPI.Response>
      token(params: Oauth.Token.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static pins = {
      add(params: Pins.Add.Params): Promise<SlackAPI.Response>
      add(params: Pins.Add.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Pins.List.Params): Promise<SlackAPI.Response>
      list(params: Pins.List.Params, callback: (params: SlackAPI.Response) => void): void
      remove(params: Pins.Remove.Params): Promise<SlackAPI.Response>
      remove(params: Pins.Remove.Params, callback: (params: SlackAPI.Response) => void): void
    };
    pins = {
      add(params: Pins.Add.Params): Promise<SlackAPI.Response>
      add(params: Pins.Add.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Pins.List.Params): Promise<SlackAPI.Response>
      list(params: Pins.List.Params, callback: (params: SlackAPI.Response) => void): void
      remove(params: Pins.Remove.Params): Promise<SlackAPI.Response>
      remove(params: Pins.Remove.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static reactions = {
      add(params: Reactions.Add.Params): Promise<SlackAPI.Response>
      add(params: Reactions.Add.Params, callback: (params: SlackAPI.Response) => void): void
      get(params: Reactions.Get.Params): Promise<SlackAPI.Response>
      get(params: Reactions.Get.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Reactions.List.Params): Promise<SlackAPI.Response>
      list(params: Reactions.List.Params, callback: (params: SlackAPI.Response) => void): void
      remove(params: Reactions.Remove.Params): Promise<SlackAPI.Response>
      remove(params: Reactions.Remove.Params, callback: (params: SlackAPI.Response) => void): void
    };
    reactions = {
      add(params: Reactions.Add.Params): Promise<SlackAPI.Response>
      add(params: Reactions.Add.Params, callback: (params: SlackAPI.Response) => void): void
      get(params: Reactions.Get.Params): Promise<SlackAPI.Response>
      get(params: Reactions.Get.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Reactions.List.Params): Promise<SlackAPI.Response>
      list(params: Reactions.List.Params, callback: (params: SlackAPI.Response) => void): void
      remove(params: Reactions.Remove.Params): Promise<SlackAPI.Response>
      remove(params: Reactions.Remove.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static reminders = {
      add(params: Reminders.Add.Params): Promise<SlackAPI.Response>
      add(params: Reminders.Add.Params, callback: (params: SlackAPI.Response) => void): void
      complete(params: Reminders.Complete.Params): Promise<SlackAPI.Response>
      complete(params: Reminders.Complete.Params, callback: (params: SlackAPI.Response) => void): void
      delete(params: Reminders.Delete.Params): Promise<SlackAPI.Response>
      delete(params: Reminders.Delete.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Reminders.Info.Params): Promise<SlackAPI.Response>
      info(params: Reminders.Info.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Reminders.List.Params): Promise<SlackAPI.Response>
      list(params: Reminders.List.Params, callback: (params: SlackAPI.Response) => void): void
    };
    reminders = {
      add(params: Reminders.Add.Params): Promise<SlackAPI.Response>
      add(params: Reminders.Add.Params, callback: (params: SlackAPI.Response) => void): void
      complete(params: Reminders.Complete.Params): Promise<SlackAPI.Response>
      complete(params: Reminders.Complete.Params, callback: (params: SlackAPI.Response) => void): void
      delete(params: Reminders.Delete.Params): Promise<SlackAPI.Response>
      delete(params: Reminders.Delete.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Reminders.Info.Params): Promise<SlackAPI.Response>
      info(params: Reminders.Info.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Reminders.List.Params): Promise<SlackAPI.Response>
      list(params: Reminders.List.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static rtm = {
      connect(params: Rtm.Connect.Params): Promise<SlackAPI.Response>
      connect(params: Rtm.Connect.Params, callback: (params: SlackAPI.Response) => void): void
      start(params: Rtm.Start.Params): Promise<SlackAPI.Response>
      start(params: Rtm.Start.Params, callback: (params: SlackAPI.Response) => void): void
    };
    rtm = {
      connect(params: Rtm.Connect.Params): Promise<SlackAPI.Response>
      connect(params: Rtm.Connect.Params, callback: (params: SlackAPI.Response) => void): void
      start(params: Rtm.Start.Params): Promise<SlackAPI.Response>
      start(params: Rtm.Start.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static search = {
      all(params: Search.All.Params): Promise<SlackAPI.Response>
      all(params: Search.All.Params, callback: (params: SlackAPI.Response) => void): void
      files(params: Search.Files.Params): Promise<SlackAPI.Response>
      files(params: Search.Files.Params, callback: (params: SlackAPI.Response) => void): void
      messages(params: Search.Messages.Params): Promise<SlackAPI.Response>
      messages(params: Search.Messages.Params, callback: (params: SlackAPI.Response) => void): void
    };
    search = {
      all(params: Search.All.Params): Promise<SlackAPI.Response>
      all(params: Search.All.Params, callback: (params: SlackAPI.Response) => void): void
      files(params: Search.Files.Params): Promise<SlackAPI.Response>
      files(params: Search.Files.Params, callback: (params: SlackAPI.Response) => void): void
      messages(params: Search.Messages.Params): Promise<SlackAPI.Response>
      messages(params: Search.Messages.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static stars = {
      add(params: Stars.Add.Params): Promise<SlackAPI.Response>
      add(params: Stars.Add.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Stars.List.Params): Promise<SlackAPI.Response>
      list(params: Stars.List.Params, callback: (params: SlackAPI.Response) => void): void
      remove(params: Stars.Remove.Params): Promise<SlackAPI.Response>
      remove(params: Stars.Remove.Params, callback: (params: SlackAPI.Response) => void): void
    };
    stars = {
      add(params: Stars.Add.Params): Promise<SlackAPI.Response>
      add(params: Stars.Add.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Stars.List.Params): Promise<SlackAPI.Response>
      list(params: Stars.List.Params, callback: (params: SlackAPI.Response) => void): void
      remove(params: Stars.Remove.Params): Promise<SlackAPI.Response>
      remove(params: Stars.Remove.Params, callback: (params: SlackAPI.Response) => void): void
    };
    static team = {
      accessLogs(params: Team.AccessLogs.Params): Promise<SlackAPI.Response>
      accessLogs(params: Team.AccessLogs.Params, callback: (params: SlackAPI.Response) => void): void
      billableInfo(params: Team.BillableInfo.Params): Promise<SlackAPI.Response>
      billableInfo(params: Team.BillableInfo.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Team.Info.Params): Promise<SlackAPI.Response>
      info(params: Team.Info.Params, callback: (params: SlackAPI.Response) => void): void
      integrationLogs(params: Team.IntegrationLogs.Params): Promise<SlackAPI.Response>
      integrationLogs(params: Team.IntegrationLogs.Params, callback: (params: SlackAPI.Response) => void): void
      profile: {
        get(params: Team.Profile.Get.Params): Promise<SlackAPI.Response>
        get(params: Team.Profile.Get.Params, callback: (params: SlackAPI.Response) => void): void
      }
    };
    team = {
      accessLogs(params: Team.AccessLogs.Params): Promise<SlackAPI.Response>
      accessLogs(params: Team.AccessLogs.Params, callback: (params: SlackAPI.Response) => void): void
      billableInfo(params: Team.BillableInfo.Params): Promise<SlackAPI.Response>
      billableInfo(params: Team.BillableInfo.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Team.Info.Params): Promise<SlackAPI.Response>
      info(params: Team.Info.Params, callback: (params: SlackAPI.Response) => void): void
      integrationLogs(params: Team.IntegrationLogs.Params): Promise<SlackAPI.Response>
      integrationLogs(params: Team.IntegrationLogs.Params, callback: (params: SlackAPI.Response) => void): void
      profile: {
        get(params: Team.Profile.Get.Params): Promise<SlackAPI.Response>
        get(params: Team.Profile.Get.Params, callback: (params: SlackAPI.Response) => void): void
      }
    };
    static usergroups = {
      create(params: Usergroups.Create.Params): Promise<SlackAPI.Response>
      create(params: Usergroups.Create.Params, callback: (params: SlackAPI.Response) => void): void
      disable(params: Usergroups.Disable.Params): Promise<SlackAPI.Response>
      disable(params: Usergroups.Disable.Params, callback: (params: SlackAPI.Response) => void): void
      enable(params: Usergroups.Enable.Params): Promise<SlackAPI.Response>
      enable(params: Usergroups.Enable.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Usergroups.List.Params): Promise<SlackAPI.Response>
      list(params: Usergroups.List.Params, callback: (params: SlackAPI.Response) => void): void
      update(params: Usergroups.Update.Params): Promise<SlackAPI.Response>
      update(params: Usergroups.Update.Params, callback: (params: SlackAPI.Response) => void): void
      users: {
        list(params: Usergroups.Users.List.Params): Promise<SlackAPI.Response>
        list(params: Usergroups.Users.List.Params, callback: (params: SlackAPI.Response) => void): void
        update(params: Usergroups.Users.Update.Params): Promise<SlackAPI.Response>
        update(params: Usergroups.Users.Update.Params, callback: (params: SlackAPI.Response) => void): void
      }
    };
    usergroups = {
      create(params: Usergroups.Create.Params): Promise<SlackAPI.Response>
      create(params: Usergroups.Create.Params, callback: (params: SlackAPI.Response) => void): void
      disable(params: Usergroups.Disable.Params): Promise<SlackAPI.Response>
      disable(params: Usergroups.Disable.Params, callback: (params: SlackAPI.Response) => void): void
      enable(params: Usergroups.Enable.Params): Promise<SlackAPI.Response>
      enable(params: Usergroups.Enable.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Usergroups.List.Params): Promise<SlackAPI.Response>
      list(params: Usergroups.List.Params, callback: (params: SlackAPI.Response) => void): void
      update(params: Usergroups.Update.Params): Promise<SlackAPI.Response>
      update(params: Usergroups.Update.Params, callback: (params: SlackAPI.Response) => void): void
      users: {
        list(params: Usergroups.Users.List.Params): Promise<SlackAPI.Response>
        list(params: Usergroups.Users.List.Params, callback: (params: SlackAPI.Response) => void): void
        update(params: Usergroups.Users.Update.Params): Promise<SlackAPI.Response>
        update(params: Usergroups.Users.Update.Params, callback: (params: SlackAPI.Response) => void): void
      }
    };
    static users = {
      deletePhoto(params: Users.DeletePhoto.Params): Promise<SlackAPI.Response>
      deletePhoto(params: Users.DeletePhoto.Params, callback: (params: SlackAPI.Response) => void): void
      getPresence(params: Users.GetPresence.Params): Promise<SlackAPI.Response>
      getPresence(params: Users.GetPresence.Params, callback: (params: SlackAPI.Response) => void): void
      identity(params: Users.Identity.Params): Promise<SlackAPI.Response>
      identity(params: Users.Identity.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Users.Info.Params): Promise<SlackAPI.Response>
      info(params: Users.Info.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Users.List.Params): Promise<SlackAPI.Response>
      list(params: Users.List.Params, callback: (params: SlackAPI.Response) => void): void
      lookupByEmail(params: Users.LookupByEmail.Params): Promise<SlackAPI.Response>
      lookupByEmail(params: Users.LookupByEmail.Params, callback: (params: SlackAPI.Response) => void): void
      setActive(params: Users.SetActive.Params): Promise<SlackAPI.Response>
      setActive(params: Users.SetActive.Params, callback: (params: SlackAPI.Response) => void): void
      setPhoto(params: Users.SetPhoto.Params): Promise<SlackAPI.Response>
      setPhoto(params: Users.SetPhoto.Params, callback: (params: SlackAPI.Response) => void): void
      setPresence(params: Users.SetPresence.Params): Promise<SlackAPI.Response>
      setPresence(params: Users.SetPresence.Params, callback: (params: SlackAPI.Response) => void): void
      profile: {
        get(params: Users.Profile.Get.Params): Promise<SlackAPI.Response>
        get(params: Users.Profile.Get.Params, callback: (params: SlackAPI.Response) => void): void
        set(params: Users.Profile.Set.Params): Promise<SlackAPI.Response>
        set(params: Users.Profile.Set.Params, callback: (params: SlackAPI.Response) => void): void
      }
    };
    users = {
      deletePhoto(params: Users.DeletePhoto.Params): Promise<SlackAPI.Response>
      deletePhoto(params: Users.DeletePhoto.Params, callback: (params: SlackAPI.Response) => void): void
      getPresence(params: Users.GetPresence.Params): Promise<SlackAPI.Response>
      getPresence(params: Users.GetPresence.Params, callback: (params: SlackAPI.Response) => void): void
      identity(params: Users.Identity.Params): Promise<SlackAPI.Response>
      identity(params: Users.Identity.Params, callback: (params: SlackAPI.Response) => void): void
      info(params: Users.Info.Params): Promise<SlackAPI.Response>
      info(params: Users.Info.Params, callback: (params: SlackAPI.Response) => void): void
      list(params: Users.List.Params): Promise<SlackAPI.Response>
      list(params: Users.List.Params, callback: (params: SlackAPI.Response) => void): void
      lookupByEmail(params: Users.LookupByEmail.Params): Promise<SlackAPI.Response>
      lookupByEmail(params: Users.LookupByEmail.Params, callback: (params: SlackAPI.Response) => void): void
      setActive(params: Users.SetActive.Params): Promise<SlackAPI.Response>
      setActive(params: Users.SetActive.Params, callback: (params: SlackAPI.Response) => void): void
      setPhoto(params: Users.SetPhoto.Params): Promise<SlackAPI.Response>
      setPhoto(params: Users.SetPhoto.Params, callback: (params: SlackAPI.Response) => void): void
      setPresence(params: Users.SetPresence.Params): Promise<SlackAPI.Response>
      setPresence(params: Users.SetPresence.Params, callback: (params: SlackAPI.Response) => void): void
      profile: {
        get(params: Users.Profile.Get.Params): Promise<SlackAPI.Response>
        get(params: Users.Profile.Get.Params, callback: (params: SlackAPI.Response) => void): void
        set(params: Users.Profile.Set.Params): Promise<SlackAPI.Response>
        set(params: Users.Profile.Set.Params, callback: (params: SlackAPI.Response) => void): void
      }
    }
  }
}