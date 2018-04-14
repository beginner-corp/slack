// generated from scripts/generate-types

declare namespace Base {
  export interface Params {
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Api.Test {
  export interface Params extends Base.Params {
    
  }
}

declare namespace Apps.Permissions.Info {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Apps.Permissions.Request {
  export interface Params extends Base.Params {
    token?: any
    scopes: any
    trigger_id: any
  }
}

declare namespace Auth.Revoke {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Auth.Test {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Bots.Info {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Channels.Archive {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Channels.Create {
  export interface Params extends Base.Params {
    token?: any
    name: any
  }
}

declare namespace Channels.History {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Channels.Info {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Channels.Invite {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    user: any
  }
}

declare namespace Channels.Join {
  export interface Params extends Base.Params {
    token?: any
    name: any
  }
}

declare namespace Channels.Kick {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    user: any
  }
}

declare namespace Channels.Leave {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Channels.List {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Channels.Mark {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    ts: any
  }
}

declare namespace Channels.Rename {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    name: any
  }
}

declare namespace Channels.Replies {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    thread_ts: any
  }
}

declare namespace Channels.SetPurpose {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    purpose: any
  }
}

declare namespace Channels.SetTopic {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    topic: any
  }
}

declare namespace Channels.Unarchive {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Chat.Delete {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    ts: any
  }
}

declare namespace Chat.GetPermalink {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    message_ts: any
  }
}

declare namespace Chat.MeMessage {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    text: any
  }
}

declare namespace Chat.PostEphemeral {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    text: any
    user: any
  }
}

declare namespace Chat.PostMessage {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    text: any
  }
}

declare namespace Chat.Unfurl {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    ts: any
    unfurls: any
  }
}

declare namespace Chat.Update {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    text: any
    ts: any
  }
}

declare namespace Conversations.Archive {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.Close {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.Create {
  export interface Params extends Base.Params {
    token?: any
    name: any
  }
}

declare namespace Conversations.History {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.Info {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.Invite {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    users: any
  }
}

declare namespace Conversations.Join {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.Kick {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    user: any
  }
}

declare namespace Conversations.Leave {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.List {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Conversations.Members {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Conversations.Open {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Conversations.Rename {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    name: any
  }
}

declare namespace Conversations.Replies {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    ts: any
  }
}

declare namespace Conversations.SetPurpose {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    purpose: any
  }
}

declare namespace Conversations.SetTopic {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    topic: any
  }
}

declare namespace Conversations.Unarchive {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Dialog.Open {
  export interface Params extends Base.Params {
    token?: any
    dialog: any
    trigger_id: any
  }
}

declare namespace Dnd.EndDnd {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Dnd.EndSnooze {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Dnd.Info {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Dnd.SetSnooze {
  export interface Params extends Base.Params {
    token?: any
    num_minutes: any
  }
}

declare namespace Dnd.TeamInfo {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Emoji.List {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Files.Comments.Add {
  export interface Params extends Base.Params {
    token?: any
    comment: any
    file: any
  }
}

declare namespace Files.Comments.Delete {
  export interface Params extends Base.Params {
    token?: any
    file: any
    id: any
  }
}

declare namespace Files.Comments.Edit {
  export interface Params extends Base.Params {
    token?: any
    comment: any
    file: any
    id: any
  }
}

declare namespace Files.Delete {
  export interface Params extends Base.Params {
    token?: any
    file: any
  }
}

declare namespace Files.Info {
  export interface Params extends Base.Params {
    token?: any
    file: any
  }
}

declare namespace Files.List {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Files.RevokePublicURL {
  export interface Params extends Base.Params {
    token?: any
    file: any
  }
}

declare namespace Files.SharedPublicURL {
  export interface Params extends Base.Params {
    token?: any
    file: any
  }
}

declare namespace Files.Upload {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Groups.Archive {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Groups.Create {
  export interface Params extends Base.Params {
    token?: any
    name: any
  }
}

declare namespace Groups.CreateChild {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Groups.History {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Groups.Info {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Groups.Invite {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    user: any
  }
}

declare namespace Groups.Kick {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    user: any
  }
}

declare namespace Groups.Leave {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Groups.List {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Groups.Mark {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    ts: any
  }
}

declare namespace Groups.Open {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Groups.Rename {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    name: any
  }
}

declare namespace Groups.Replies {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    thread_ts: any
  }
}

declare namespace Groups.SetPurpose {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    purpose: any
  }
}

declare namespace Groups.SetTopic {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    topic: any
  }
}

declare namespace Groups.Unarchive {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Im.Close {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Im.History {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Im.List {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Im.Mark {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    ts: any
  }
}

declare namespace Im.Open {
  export interface Params extends Base.Params {
    token?: any
    user: any
  }
}

declare namespace Im.Replies {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    thread_ts: any
  }
}

declare namespace Migration.Exchange {
  export interface Params extends Base.Params {
    token?: any
    users: any
  }
}

declare namespace Mpim.Close {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Mpim.History {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Mpim.List {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Mpim.Mark {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    ts: any
  }
}

declare namespace Mpim.Open {
  export interface Params extends Base.Params {
    token?: any
    users: any
  }
}

declare namespace Mpim.Replies {
  export interface Params extends Base.Params {
    token?: any
    channel: any
    thread_ts: any
  }
}

declare namespace Oauth.Access {
  export interface Params extends Base.Params {
    client_id: any
    client_secret: any
    code: any
  }
}

declare namespace Oauth.Token {
  export interface Params extends Base.Params {
    client_id: any
    client_secret: any
    code: any
  }
}

declare namespace Pins.Add {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Pins.List {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Pins.Remove {
  export interface Params extends Base.Params {
    token?: any
    channel: any
  }
}

declare namespace Reactions.Add {
  export interface Params extends Base.Params {
    token?: any
    name: any
  }
}

declare namespace Reactions.Get {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Reactions.List {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Reactions.Remove {
  export interface Params extends Base.Params {
    token?: any
    name: any
  }
}

declare namespace Reminders.Add {
  export interface Params extends Base.Params {
    token?: any
    text: any
    time: any
  }
}

declare namespace Reminders.Complete {
  export interface Params extends Base.Params {
    token?: any
    reminder: any
  }
}

declare namespace Reminders.Delete {
  export interface Params extends Base.Params {
    token?: any
    reminder: any
  }
}

declare namespace Reminders.Info {
  export interface Params extends Base.Params {
    token?: any
    reminder: any
  }
}

declare namespace Reminders.List {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Rtm.Connect {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Rtm.Start {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Search.All {
  export interface Params extends Base.Params {
    token?: any
    query: any
  }
}

declare namespace Search.Files {
  export interface Params extends Base.Params {
    token?: any
    query: any
  }
}

declare namespace Search.Messages {
  export interface Params extends Base.Params {
    token?: any
    query: any
  }
}

declare namespace Stars.Add {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Stars.List {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Stars.Remove {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Team.AccessLogs {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Team.BillableInfo {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Team.Info {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Team.IntegrationLogs {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Team.Profile.Get {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Usergroups.Create {
  export interface Params extends Base.Params {
    token?: any
    name: any
  }
}

declare namespace Usergroups.Disable {
  export interface Params extends Base.Params {
    token?: any
    usergroup: any
  }
}

declare namespace Usergroups.Enable {
  export interface Params extends Base.Params {
    token?: any
    usergroup: any
  }
}

declare namespace Usergroups.List {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Usergroups.Update {
  export interface Params extends Base.Params {
    token?: any
    usergroup: any
  }
}

declare namespace Usergroups.Users.List {
  export interface Params extends Base.Params {
    token?: any
    usergroup: any
  }
}

declare namespace Usergroups.Users.Update {
  export interface Params extends Base.Params {
    token?: any
    usergroup: any
    users: any
  }
}

declare namespace Users.DeletePhoto {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Users.GetPresence {
  export interface Params extends Base.Params {
    token?: any
    user: any
  }
}

declare namespace Users.Identity {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Users.Info {
  export interface Params extends Base.Params {
    token?: any
    user: any
  }
}

declare namespace Users.List {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Users.LookupByEmail {
  export interface Params extends Base.Params {
    token?: any
    email: any
  }
}

declare namespace Users.SetActive {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Users.SetPhoto {
  export interface Params extends Base.Params {
    token?: any
    image: any
  }
}

declare namespace Users.SetPresence {
  export interface Params extends Base.Params {
    token?: any
    presence: any
  }
}

declare namespace Users.Profile.Get {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare namespace Users.Profile.Set {
  export interface Params extends Base.Params {
    token?: any
  }
}

declare module "slack" {
  export = class Slack {
    token: string;
    constructor(token): void;
    static api = {
      test(params: Api.Test.Params): Promise<Base.Response>
      test(params: Api.Test.Params, callback: (params: Base.Response) => void): void
    };
    api = {
      test(params: Api.Test.Params): Promise<Base.Response>
      test(params: Api.Test.Params, callback: (params: Base.Response) => void): void
    };
    static apps = {
      permissions: {
        info(params: Apps.Permissions.Info.Params): Promise<Base.Response>
        info(params: Apps.Permissions.Info.Params, callback: (params: Base.Response) => void): void
        request(params: Apps.Permissions.Request.Params): Promise<Base.Response>
        request(params: Apps.Permissions.Request.Params, callback: (params: Base.Response) => void): void
      }
    };
    apps = {
      permissions: {
        info(params: Apps.Permissions.Info.Params): Promise<Base.Response>
        info(params: Apps.Permissions.Info.Params, callback: (params: Base.Response) => void): void
        request(params: Apps.Permissions.Request.Params): Promise<Base.Response>
        request(params: Apps.Permissions.Request.Params, callback: (params: Base.Response) => void): void
      }
    };
    static auth = {
      revoke(params: Auth.Revoke.Params): Promise<Base.Response>
      revoke(params: Auth.Revoke.Params, callback: (params: Base.Response) => void): void
      test(params: Auth.Test.Params): Promise<Base.Response>
      test(params: Auth.Test.Params, callback: (params: Base.Response) => void): void
    };
    auth = {
      revoke(params: Auth.Revoke.Params): Promise<Base.Response>
      revoke(params: Auth.Revoke.Params, callback: (params: Base.Response) => void): void
      test(params: Auth.Test.Params): Promise<Base.Response>
      test(params: Auth.Test.Params, callback: (params: Base.Response) => void): void
    };
    static bots = {
      info(params: Bots.Info.Params): Promise<Base.Response>
      info(params: Bots.Info.Params, callback: (params: Base.Response) => void): void
    };
    bots = {
      info(params: Bots.Info.Params): Promise<Base.Response>
      info(params: Bots.Info.Params, callback: (params: Base.Response) => void): void
    };
    static channels = {
      archive(params: Channels.Archive.Params): Promise<Base.Response>
      archive(params: Channels.Archive.Params, callback: (params: Base.Response) => void): void
      create(params: Channels.Create.Params): Promise<Base.Response>
      create(params: Channels.Create.Params, callback: (params: Base.Response) => void): void
      history(params: Channels.History.Params): Promise<Base.Response>
      history(params: Channels.History.Params, callback: (params: Base.Response) => void): void
      info(params: Channels.Info.Params): Promise<Base.Response>
      info(params: Channels.Info.Params, callback: (params: Base.Response) => void): void
      invite(params: Channels.Invite.Params): Promise<Base.Response>
      invite(params: Channels.Invite.Params, callback: (params: Base.Response) => void): void
      join(params: Channels.Join.Params): Promise<Base.Response>
      join(params: Channels.Join.Params, callback: (params: Base.Response) => void): void
      kick(params: Channels.Kick.Params): Promise<Base.Response>
      kick(params: Channels.Kick.Params, callback: (params: Base.Response) => void): void
      leave(params: Channels.Leave.Params): Promise<Base.Response>
      leave(params: Channels.Leave.Params, callback: (params: Base.Response) => void): void
      list(params: Channels.List.Params): Promise<Base.Response>
      list(params: Channels.List.Params, callback: (params: Base.Response) => void): void
      mark(params: Channels.Mark.Params): Promise<Base.Response>
      mark(params: Channels.Mark.Params, callback: (params: Base.Response) => void): void
      rename(params: Channels.Rename.Params): Promise<Base.Response>
      rename(params: Channels.Rename.Params, callback: (params: Base.Response) => void): void
      replies(params: Channels.Replies.Params): Promise<Base.Response>
      replies(params: Channels.Replies.Params, callback: (params: Base.Response) => void): void
      setPurpose(params: Channels.SetPurpose.Params): Promise<Base.Response>
      setPurpose(params: Channels.SetPurpose.Params, callback: (params: Base.Response) => void): void
      setTopic(params: Channels.SetTopic.Params): Promise<Base.Response>
      setTopic(params: Channels.SetTopic.Params, callback: (params: Base.Response) => void): void
      unarchive(params: Channels.Unarchive.Params): Promise<Base.Response>
      unarchive(params: Channels.Unarchive.Params, callback: (params: Base.Response) => void): void
    };
    channels = {
      archive(params: Channels.Archive.Params): Promise<Base.Response>
      archive(params: Channels.Archive.Params, callback: (params: Base.Response) => void): void
      create(params: Channels.Create.Params): Promise<Base.Response>
      create(params: Channels.Create.Params, callback: (params: Base.Response) => void): void
      history(params: Channels.History.Params): Promise<Base.Response>
      history(params: Channels.History.Params, callback: (params: Base.Response) => void): void
      info(params: Channels.Info.Params): Promise<Base.Response>
      info(params: Channels.Info.Params, callback: (params: Base.Response) => void): void
      invite(params: Channels.Invite.Params): Promise<Base.Response>
      invite(params: Channels.Invite.Params, callback: (params: Base.Response) => void): void
      join(params: Channels.Join.Params): Promise<Base.Response>
      join(params: Channels.Join.Params, callback: (params: Base.Response) => void): void
      kick(params: Channels.Kick.Params): Promise<Base.Response>
      kick(params: Channels.Kick.Params, callback: (params: Base.Response) => void): void
      leave(params: Channels.Leave.Params): Promise<Base.Response>
      leave(params: Channels.Leave.Params, callback: (params: Base.Response) => void): void
      list(params: Channels.List.Params): Promise<Base.Response>
      list(params: Channels.List.Params, callback: (params: Base.Response) => void): void
      mark(params: Channels.Mark.Params): Promise<Base.Response>
      mark(params: Channels.Mark.Params, callback: (params: Base.Response) => void): void
      rename(params: Channels.Rename.Params): Promise<Base.Response>
      rename(params: Channels.Rename.Params, callback: (params: Base.Response) => void): void
      replies(params: Channels.Replies.Params): Promise<Base.Response>
      replies(params: Channels.Replies.Params, callback: (params: Base.Response) => void): void
      setPurpose(params: Channels.SetPurpose.Params): Promise<Base.Response>
      setPurpose(params: Channels.SetPurpose.Params, callback: (params: Base.Response) => void): void
      setTopic(params: Channels.SetTopic.Params): Promise<Base.Response>
      setTopic(params: Channels.SetTopic.Params, callback: (params: Base.Response) => void): void
      unarchive(params: Channels.Unarchive.Params): Promise<Base.Response>
      unarchive(params: Channels.Unarchive.Params, callback: (params: Base.Response) => void): void
    };
    static chat = {
      delete(params: Chat.Delete.Params): Promise<Base.Response>
      delete(params: Chat.Delete.Params, callback: (params: Base.Response) => void): void
      getPermalink(params: Chat.GetPermalink.Params): Promise<Base.Response>
      getPermalink(params: Chat.GetPermalink.Params, callback: (params: Base.Response) => void): void
      meMessage(params: Chat.MeMessage.Params): Promise<Base.Response>
      meMessage(params: Chat.MeMessage.Params, callback: (params: Base.Response) => void): void
      postEphemeral(params: Chat.PostEphemeral.Params): Promise<Base.Response>
      postEphemeral(params: Chat.PostEphemeral.Params, callback: (params: Base.Response) => void): void
      postMessage(params: Chat.PostMessage.Params): Promise<Base.Response>
      postMessage(params: Chat.PostMessage.Params, callback: (params: Base.Response) => void): void
      unfurl(params: Chat.Unfurl.Params): Promise<Base.Response>
      unfurl(params: Chat.Unfurl.Params, callback: (params: Base.Response) => void): void
      update(params: Chat.Update.Params): Promise<Base.Response>
      update(params: Chat.Update.Params, callback: (params: Base.Response) => void): void
    };
    chat = {
      delete(params: Chat.Delete.Params): Promise<Base.Response>
      delete(params: Chat.Delete.Params, callback: (params: Base.Response) => void): void
      getPermalink(params: Chat.GetPermalink.Params): Promise<Base.Response>
      getPermalink(params: Chat.GetPermalink.Params, callback: (params: Base.Response) => void): void
      meMessage(params: Chat.MeMessage.Params): Promise<Base.Response>
      meMessage(params: Chat.MeMessage.Params, callback: (params: Base.Response) => void): void
      postEphemeral(params: Chat.PostEphemeral.Params): Promise<Base.Response>
      postEphemeral(params: Chat.PostEphemeral.Params, callback: (params: Base.Response) => void): void
      postMessage(params: Chat.PostMessage.Params): Promise<Base.Response>
      postMessage(params: Chat.PostMessage.Params, callback: (params: Base.Response) => void): void
      unfurl(params: Chat.Unfurl.Params): Promise<Base.Response>
      unfurl(params: Chat.Unfurl.Params, callback: (params: Base.Response) => void): void
      update(params: Chat.Update.Params): Promise<Base.Response>
      update(params: Chat.Update.Params, callback: (params: Base.Response) => void): void
    };
    static conversations = {
      archive(params: Conversations.Archive.Params): Promise<Base.Response>
      archive(params: Conversations.Archive.Params, callback: (params: Base.Response) => void): void
      close(params: Conversations.Close.Params): Promise<Base.Response>
      close(params: Conversations.Close.Params, callback: (params: Base.Response) => void): void
      create(params: Conversations.Create.Params): Promise<Base.Response>
      create(params: Conversations.Create.Params, callback: (params: Base.Response) => void): void
      history(params: Conversations.History.Params): Promise<Base.Response>
      history(params: Conversations.History.Params, callback: (params: Base.Response) => void): void
      info(params: Conversations.Info.Params): Promise<Base.Response>
      info(params: Conversations.Info.Params, callback: (params: Base.Response) => void): void
      invite(params: Conversations.Invite.Params): Promise<Base.Response>
      invite(params: Conversations.Invite.Params, callback: (params: Base.Response) => void): void
      join(params: Conversations.Join.Params): Promise<Base.Response>
      join(params: Conversations.Join.Params, callback: (params: Base.Response) => void): void
      kick(params: Conversations.Kick.Params): Promise<Base.Response>
      kick(params: Conversations.Kick.Params, callback: (params: Base.Response) => void): void
      leave(params: Conversations.Leave.Params): Promise<Base.Response>
      leave(params: Conversations.Leave.Params, callback: (params: Base.Response) => void): void
      list(params: Conversations.List.Params): Promise<Base.Response>
      list(params: Conversations.List.Params, callback: (params: Base.Response) => void): void
      members(params: Conversations.Members.Params): Promise<Base.Response>
      members(params: Conversations.Members.Params, callback: (params: Base.Response) => void): void
      open(params: Conversations.Open.Params): Promise<Base.Response>
      open(params: Conversations.Open.Params, callback: (params: Base.Response) => void): void
      rename(params: Conversations.Rename.Params): Promise<Base.Response>
      rename(params: Conversations.Rename.Params, callback: (params: Base.Response) => void): void
      replies(params: Conversations.Replies.Params): Promise<Base.Response>
      replies(params: Conversations.Replies.Params, callback: (params: Base.Response) => void): void
      setPurpose(params: Conversations.SetPurpose.Params): Promise<Base.Response>
      setPurpose(params: Conversations.SetPurpose.Params, callback: (params: Base.Response) => void): void
      setTopic(params: Conversations.SetTopic.Params): Promise<Base.Response>
      setTopic(params: Conversations.SetTopic.Params, callback: (params: Base.Response) => void): void
      unarchive(params: Conversations.Unarchive.Params): Promise<Base.Response>
      unarchive(params: Conversations.Unarchive.Params, callback: (params: Base.Response) => void): void
    };
    conversations = {
      archive(params: Conversations.Archive.Params): Promise<Base.Response>
      archive(params: Conversations.Archive.Params, callback: (params: Base.Response) => void): void
      close(params: Conversations.Close.Params): Promise<Base.Response>
      close(params: Conversations.Close.Params, callback: (params: Base.Response) => void): void
      create(params: Conversations.Create.Params): Promise<Base.Response>
      create(params: Conversations.Create.Params, callback: (params: Base.Response) => void): void
      history(params: Conversations.History.Params): Promise<Base.Response>
      history(params: Conversations.History.Params, callback: (params: Base.Response) => void): void
      info(params: Conversations.Info.Params): Promise<Base.Response>
      info(params: Conversations.Info.Params, callback: (params: Base.Response) => void): void
      invite(params: Conversations.Invite.Params): Promise<Base.Response>
      invite(params: Conversations.Invite.Params, callback: (params: Base.Response) => void): void
      join(params: Conversations.Join.Params): Promise<Base.Response>
      join(params: Conversations.Join.Params, callback: (params: Base.Response) => void): void
      kick(params: Conversations.Kick.Params): Promise<Base.Response>
      kick(params: Conversations.Kick.Params, callback: (params: Base.Response) => void): void
      leave(params: Conversations.Leave.Params): Promise<Base.Response>
      leave(params: Conversations.Leave.Params, callback: (params: Base.Response) => void): void
      list(params: Conversations.List.Params): Promise<Base.Response>
      list(params: Conversations.List.Params, callback: (params: Base.Response) => void): void
      members(params: Conversations.Members.Params): Promise<Base.Response>
      members(params: Conversations.Members.Params, callback: (params: Base.Response) => void): void
      open(params: Conversations.Open.Params): Promise<Base.Response>
      open(params: Conversations.Open.Params, callback: (params: Base.Response) => void): void
      rename(params: Conversations.Rename.Params): Promise<Base.Response>
      rename(params: Conversations.Rename.Params, callback: (params: Base.Response) => void): void
      replies(params: Conversations.Replies.Params): Promise<Base.Response>
      replies(params: Conversations.Replies.Params, callback: (params: Base.Response) => void): void
      setPurpose(params: Conversations.SetPurpose.Params): Promise<Base.Response>
      setPurpose(params: Conversations.SetPurpose.Params, callback: (params: Base.Response) => void): void
      setTopic(params: Conversations.SetTopic.Params): Promise<Base.Response>
      setTopic(params: Conversations.SetTopic.Params, callback: (params: Base.Response) => void): void
      unarchive(params: Conversations.Unarchive.Params): Promise<Base.Response>
      unarchive(params: Conversations.Unarchive.Params, callback: (params: Base.Response) => void): void
    };
    static dialog = {
      open(params: Dialog.Open.Params): Promise<Base.Response>
      open(params: Dialog.Open.Params, callback: (params: Base.Response) => void): void
    };
    dialog = {
      open(params: Dialog.Open.Params): Promise<Base.Response>
      open(params: Dialog.Open.Params, callback: (params: Base.Response) => void): void
    };
    static dnd = {
      endDnd(params: Dnd.EndDnd.Params): Promise<Base.Response>
      endDnd(params: Dnd.EndDnd.Params, callback: (params: Base.Response) => void): void
      endSnooze(params: Dnd.EndSnooze.Params): Promise<Base.Response>
      endSnooze(params: Dnd.EndSnooze.Params, callback: (params: Base.Response) => void): void
      info(params: Dnd.Info.Params): Promise<Base.Response>
      info(params: Dnd.Info.Params, callback: (params: Base.Response) => void): void
      setSnooze(params: Dnd.SetSnooze.Params): Promise<Base.Response>
      setSnooze(params: Dnd.SetSnooze.Params, callback: (params: Base.Response) => void): void
      teamInfo(params: Dnd.TeamInfo.Params): Promise<Base.Response>
      teamInfo(params: Dnd.TeamInfo.Params, callback: (params: Base.Response) => void): void
    };
    dnd = {
      endDnd(params: Dnd.EndDnd.Params): Promise<Base.Response>
      endDnd(params: Dnd.EndDnd.Params, callback: (params: Base.Response) => void): void
      endSnooze(params: Dnd.EndSnooze.Params): Promise<Base.Response>
      endSnooze(params: Dnd.EndSnooze.Params, callback: (params: Base.Response) => void): void
      info(params: Dnd.Info.Params): Promise<Base.Response>
      info(params: Dnd.Info.Params, callback: (params: Base.Response) => void): void
      setSnooze(params: Dnd.SetSnooze.Params): Promise<Base.Response>
      setSnooze(params: Dnd.SetSnooze.Params, callback: (params: Base.Response) => void): void
      teamInfo(params: Dnd.TeamInfo.Params): Promise<Base.Response>
      teamInfo(params: Dnd.TeamInfo.Params, callback: (params: Base.Response) => void): void
    };
    static emoji = {
      list(params: Emoji.List.Params): Promise<Base.Response>
      list(params: Emoji.List.Params, callback: (params: Base.Response) => void): void
    };
    emoji = {
      list(params: Emoji.List.Params): Promise<Base.Response>
      list(params: Emoji.List.Params, callback: (params: Base.Response) => void): void
    };
    static files = {
      comments: {
        add(params: Files.Comments.Add.Params): Promise<Base.Response>
        add(params: Files.Comments.Add.Params, callback: (params: Base.Response) => void): void
        delete(params: Files.Comments.Delete.Params): Promise<Base.Response>
        delete(params: Files.Comments.Delete.Params, callback: (params: Base.Response) => void): void
        edit(params: Files.Comments.Edit.Params): Promise<Base.Response>
        edit(params: Files.Comments.Edit.Params, callback: (params: Base.Response) => void): void
      }
      delete(params: Files.Delete.Params): Promise<Base.Response>
      delete(params: Files.Delete.Params, callback: (params: Base.Response) => void): void
      info(params: Files.Info.Params): Promise<Base.Response>
      info(params: Files.Info.Params, callback: (params: Base.Response) => void): void
      list(params: Files.List.Params): Promise<Base.Response>
      list(params: Files.List.Params, callback: (params: Base.Response) => void): void
      revokePublicURL(params: Files.RevokePublicURL.Params): Promise<Base.Response>
      revokePublicURL(params: Files.RevokePublicURL.Params, callback: (params: Base.Response) => void): void
      sharedPublicURL(params: Files.SharedPublicURL.Params): Promise<Base.Response>
      sharedPublicURL(params: Files.SharedPublicURL.Params, callback: (params: Base.Response) => void): void
      upload(params: Files.Upload.Params): Promise<Base.Response>
      upload(params: Files.Upload.Params, callback: (params: Base.Response) => void): void
    };
    files = {
      comments: {
        add(params: Files.Comments.Add.Params): Promise<Base.Response>
        add(params: Files.Comments.Add.Params, callback: (params: Base.Response) => void): void
        delete(params: Files.Comments.Delete.Params): Promise<Base.Response>
        delete(params: Files.Comments.Delete.Params, callback: (params: Base.Response) => void): void
        edit(params: Files.Comments.Edit.Params): Promise<Base.Response>
        edit(params: Files.Comments.Edit.Params, callback: (params: Base.Response) => void): void
      }
      delete(params: Files.Delete.Params): Promise<Base.Response>
      delete(params: Files.Delete.Params, callback: (params: Base.Response) => void): void
      info(params: Files.Info.Params): Promise<Base.Response>
      info(params: Files.Info.Params, callback: (params: Base.Response) => void): void
      list(params: Files.List.Params): Promise<Base.Response>
      list(params: Files.List.Params, callback: (params: Base.Response) => void): void
      revokePublicURL(params: Files.RevokePublicURL.Params): Promise<Base.Response>
      revokePublicURL(params: Files.RevokePublicURL.Params, callback: (params: Base.Response) => void): void
      sharedPublicURL(params: Files.SharedPublicURL.Params): Promise<Base.Response>
      sharedPublicURL(params: Files.SharedPublicURL.Params, callback: (params: Base.Response) => void): void
      upload(params: Files.Upload.Params): Promise<Base.Response>
      upload(params: Files.Upload.Params, callback: (params: Base.Response) => void): void
    };
    static groups = {
      archive(params: Groups.Archive.Params): Promise<Base.Response>
      archive(params: Groups.Archive.Params, callback: (params: Base.Response) => void): void
      create(params: Groups.Create.Params): Promise<Base.Response>
      create(params: Groups.Create.Params, callback: (params: Base.Response) => void): void
      createChild(params: Groups.CreateChild.Params): Promise<Base.Response>
      createChild(params: Groups.CreateChild.Params, callback: (params: Base.Response) => void): void
      history(params: Groups.History.Params): Promise<Base.Response>
      history(params: Groups.History.Params, callback: (params: Base.Response) => void): void
      info(params: Groups.Info.Params): Promise<Base.Response>
      info(params: Groups.Info.Params, callback: (params: Base.Response) => void): void
      invite(params: Groups.Invite.Params): Promise<Base.Response>
      invite(params: Groups.Invite.Params, callback: (params: Base.Response) => void): void
      kick(params: Groups.Kick.Params): Promise<Base.Response>
      kick(params: Groups.Kick.Params, callback: (params: Base.Response) => void): void
      leave(params: Groups.Leave.Params): Promise<Base.Response>
      leave(params: Groups.Leave.Params, callback: (params: Base.Response) => void): void
      list(params: Groups.List.Params): Promise<Base.Response>
      list(params: Groups.List.Params, callback: (params: Base.Response) => void): void
      mark(params: Groups.Mark.Params): Promise<Base.Response>
      mark(params: Groups.Mark.Params, callback: (params: Base.Response) => void): void
      open(params: Groups.Open.Params): Promise<Base.Response>
      open(params: Groups.Open.Params, callback: (params: Base.Response) => void): void
      rename(params: Groups.Rename.Params): Promise<Base.Response>
      rename(params: Groups.Rename.Params, callback: (params: Base.Response) => void): void
      replies(params: Groups.Replies.Params): Promise<Base.Response>
      replies(params: Groups.Replies.Params, callback: (params: Base.Response) => void): void
      setPurpose(params: Groups.SetPurpose.Params): Promise<Base.Response>
      setPurpose(params: Groups.SetPurpose.Params, callback: (params: Base.Response) => void): void
      setTopic(params: Groups.SetTopic.Params): Promise<Base.Response>
      setTopic(params: Groups.SetTopic.Params, callback: (params: Base.Response) => void): void
      unarchive(params: Groups.Unarchive.Params): Promise<Base.Response>
      unarchive(params: Groups.Unarchive.Params, callback: (params: Base.Response) => void): void
    };
    groups = {
      archive(params: Groups.Archive.Params): Promise<Base.Response>
      archive(params: Groups.Archive.Params, callback: (params: Base.Response) => void): void
      create(params: Groups.Create.Params): Promise<Base.Response>
      create(params: Groups.Create.Params, callback: (params: Base.Response) => void): void
      createChild(params: Groups.CreateChild.Params): Promise<Base.Response>
      createChild(params: Groups.CreateChild.Params, callback: (params: Base.Response) => void): void
      history(params: Groups.History.Params): Promise<Base.Response>
      history(params: Groups.History.Params, callback: (params: Base.Response) => void): void
      info(params: Groups.Info.Params): Promise<Base.Response>
      info(params: Groups.Info.Params, callback: (params: Base.Response) => void): void
      invite(params: Groups.Invite.Params): Promise<Base.Response>
      invite(params: Groups.Invite.Params, callback: (params: Base.Response) => void): void
      kick(params: Groups.Kick.Params): Promise<Base.Response>
      kick(params: Groups.Kick.Params, callback: (params: Base.Response) => void): void
      leave(params: Groups.Leave.Params): Promise<Base.Response>
      leave(params: Groups.Leave.Params, callback: (params: Base.Response) => void): void
      list(params: Groups.List.Params): Promise<Base.Response>
      list(params: Groups.List.Params, callback: (params: Base.Response) => void): void
      mark(params: Groups.Mark.Params): Promise<Base.Response>
      mark(params: Groups.Mark.Params, callback: (params: Base.Response) => void): void
      open(params: Groups.Open.Params): Promise<Base.Response>
      open(params: Groups.Open.Params, callback: (params: Base.Response) => void): void
      rename(params: Groups.Rename.Params): Promise<Base.Response>
      rename(params: Groups.Rename.Params, callback: (params: Base.Response) => void): void
      replies(params: Groups.Replies.Params): Promise<Base.Response>
      replies(params: Groups.Replies.Params, callback: (params: Base.Response) => void): void
      setPurpose(params: Groups.SetPurpose.Params): Promise<Base.Response>
      setPurpose(params: Groups.SetPurpose.Params, callback: (params: Base.Response) => void): void
      setTopic(params: Groups.SetTopic.Params): Promise<Base.Response>
      setTopic(params: Groups.SetTopic.Params, callback: (params: Base.Response) => void): void
      unarchive(params: Groups.Unarchive.Params): Promise<Base.Response>
      unarchive(params: Groups.Unarchive.Params, callback: (params: Base.Response) => void): void
    };
    static im = {
      close(params: Im.Close.Params): Promise<Base.Response>
      close(params: Im.Close.Params, callback: (params: Base.Response) => void): void
      history(params: Im.History.Params): Promise<Base.Response>
      history(params: Im.History.Params, callback: (params: Base.Response) => void): void
      list(params: Im.List.Params): Promise<Base.Response>
      list(params: Im.List.Params, callback: (params: Base.Response) => void): void
      mark(params: Im.Mark.Params): Promise<Base.Response>
      mark(params: Im.Mark.Params, callback: (params: Base.Response) => void): void
      open(params: Im.Open.Params): Promise<Base.Response>
      open(params: Im.Open.Params, callback: (params: Base.Response) => void): void
      replies(params: Im.Replies.Params): Promise<Base.Response>
      replies(params: Im.Replies.Params, callback: (params: Base.Response) => void): void
    };
    im = {
      close(params: Im.Close.Params): Promise<Base.Response>
      close(params: Im.Close.Params, callback: (params: Base.Response) => void): void
      history(params: Im.History.Params): Promise<Base.Response>
      history(params: Im.History.Params, callback: (params: Base.Response) => void): void
      list(params: Im.List.Params): Promise<Base.Response>
      list(params: Im.List.Params, callback: (params: Base.Response) => void): void
      mark(params: Im.Mark.Params): Promise<Base.Response>
      mark(params: Im.Mark.Params, callback: (params: Base.Response) => void): void
      open(params: Im.Open.Params): Promise<Base.Response>
      open(params: Im.Open.Params, callback: (params: Base.Response) => void): void
      replies(params: Im.Replies.Params): Promise<Base.Response>
      replies(params: Im.Replies.Params, callback: (params: Base.Response) => void): void
    };
    static migration = {
      exchange(params: Migration.Exchange.Params): Promise<Base.Response>
      exchange(params: Migration.Exchange.Params, callback: (params: Base.Response) => void): void
    };
    migration = {
      exchange(params: Migration.Exchange.Params): Promise<Base.Response>
      exchange(params: Migration.Exchange.Params, callback: (params: Base.Response) => void): void
    };
    static mpim = {
      close(params: Mpim.Close.Params): Promise<Base.Response>
      close(params: Mpim.Close.Params, callback: (params: Base.Response) => void): void
      history(params: Mpim.History.Params): Promise<Base.Response>
      history(params: Mpim.History.Params, callback: (params: Base.Response) => void): void
      list(params: Mpim.List.Params): Promise<Base.Response>
      list(params: Mpim.List.Params, callback: (params: Base.Response) => void): void
      mark(params: Mpim.Mark.Params): Promise<Base.Response>
      mark(params: Mpim.Mark.Params, callback: (params: Base.Response) => void): void
      open(params: Mpim.Open.Params): Promise<Base.Response>
      open(params: Mpim.Open.Params, callback: (params: Base.Response) => void): void
      replies(params: Mpim.Replies.Params): Promise<Base.Response>
      replies(params: Mpim.Replies.Params, callback: (params: Base.Response) => void): void
    };
    mpim = {
      close(params: Mpim.Close.Params): Promise<Base.Response>
      close(params: Mpim.Close.Params, callback: (params: Base.Response) => void): void
      history(params: Mpim.History.Params): Promise<Base.Response>
      history(params: Mpim.History.Params, callback: (params: Base.Response) => void): void
      list(params: Mpim.List.Params): Promise<Base.Response>
      list(params: Mpim.List.Params, callback: (params: Base.Response) => void): void
      mark(params: Mpim.Mark.Params): Promise<Base.Response>
      mark(params: Mpim.Mark.Params, callback: (params: Base.Response) => void): void
      open(params: Mpim.Open.Params): Promise<Base.Response>
      open(params: Mpim.Open.Params, callback: (params: Base.Response) => void): void
      replies(params: Mpim.Replies.Params): Promise<Base.Response>
      replies(params: Mpim.Replies.Params, callback: (params: Base.Response) => void): void
    };
    static oauth = {
      access(params: Oauth.Access.Params): Promise<Base.Response>
      access(params: Oauth.Access.Params, callback: (params: Base.Response) => void): void
      token(params: Oauth.Token.Params): Promise<Base.Response>
      token(params: Oauth.Token.Params, callback: (params: Base.Response) => void): void
    };
    oauth = {
      access(params: Oauth.Access.Params): Promise<Base.Response>
      access(params: Oauth.Access.Params, callback: (params: Base.Response) => void): void
      token(params: Oauth.Token.Params): Promise<Base.Response>
      token(params: Oauth.Token.Params, callback: (params: Base.Response) => void): void
    };
    static pins = {
      add(params: Pins.Add.Params): Promise<Base.Response>
      add(params: Pins.Add.Params, callback: (params: Base.Response) => void): void
      list(params: Pins.List.Params): Promise<Base.Response>
      list(params: Pins.List.Params, callback: (params: Base.Response) => void): void
      remove(params: Pins.Remove.Params): Promise<Base.Response>
      remove(params: Pins.Remove.Params, callback: (params: Base.Response) => void): void
    };
    pins = {
      add(params: Pins.Add.Params): Promise<Base.Response>
      add(params: Pins.Add.Params, callback: (params: Base.Response) => void): void
      list(params: Pins.List.Params): Promise<Base.Response>
      list(params: Pins.List.Params, callback: (params: Base.Response) => void): void
      remove(params: Pins.Remove.Params): Promise<Base.Response>
      remove(params: Pins.Remove.Params, callback: (params: Base.Response) => void): void
    };
    static reactions = {
      add(params: Reactions.Add.Params): Promise<Base.Response>
      add(params: Reactions.Add.Params, callback: (params: Base.Response) => void): void
      get(params: Reactions.Get.Params): Promise<Base.Response>
      get(params: Reactions.Get.Params, callback: (params: Base.Response) => void): void
      list(params: Reactions.List.Params): Promise<Base.Response>
      list(params: Reactions.List.Params, callback: (params: Base.Response) => void): void
      remove(params: Reactions.Remove.Params): Promise<Base.Response>
      remove(params: Reactions.Remove.Params, callback: (params: Base.Response) => void): void
    };
    reactions = {
      add(params: Reactions.Add.Params): Promise<Base.Response>
      add(params: Reactions.Add.Params, callback: (params: Base.Response) => void): void
      get(params: Reactions.Get.Params): Promise<Base.Response>
      get(params: Reactions.Get.Params, callback: (params: Base.Response) => void): void
      list(params: Reactions.List.Params): Promise<Base.Response>
      list(params: Reactions.List.Params, callback: (params: Base.Response) => void): void
      remove(params: Reactions.Remove.Params): Promise<Base.Response>
      remove(params: Reactions.Remove.Params, callback: (params: Base.Response) => void): void
    };
    static reminders = {
      add(params: Reminders.Add.Params): Promise<Base.Response>
      add(params: Reminders.Add.Params, callback: (params: Base.Response) => void): void
      complete(params: Reminders.Complete.Params): Promise<Base.Response>
      complete(params: Reminders.Complete.Params, callback: (params: Base.Response) => void): void
      delete(params: Reminders.Delete.Params): Promise<Base.Response>
      delete(params: Reminders.Delete.Params, callback: (params: Base.Response) => void): void
      info(params: Reminders.Info.Params): Promise<Base.Response>
      info(params: Reminders.Info.Params, callback: (params: Base.Response) => void): void
      list(params: Reminders.List.Params): Promise<Base.Response>
      list(params: Reminders.List.Params, callback: (params: Base.Response) => void): void
    };
    reminders = {
      add(params: Reminders.Add.Params): Promise<Base.Response>
      add(params: Reminders.Add.Params, callback: (params: Base.Response) => void): void
      complete(params: Reminders.Complete.Params): Promise<Base.Response>
      complete(params: Reminders.Complete.Params, callback: (params: Base.Response) => void): void
      delete(params: Reminders.Delete.Params): Promise<Base.Response>
      delete(params: Reminders.Delete.Params, callback: (params: Base.Response) => void): void
      info(params: Reminders.Info.Params): Promise<Base.Response>
      info(params: Reminders.Info.Params, callback: (params: Base.Response) => void): void
      list(params: Reminders.List.Params): Promise<Base.Response>
      list(params: Reminders.List.Params, callback: (params: Base.Response) => void): void
    };
    static rtm = {
      connect(params: Rtm.Connect.Params): Promise<Base.Response>
      connect(params: Rtm.Connect.Params, callback: (params: Base.Response) => void): void
      start(params: Rtm.Start.Params): Promise<Base.Response>
      start(params: Rtm.Start.Params, callback: (params: Base.Response) => void): void
    };
    rtm = {
      connect(params: Rtm.Connect.Params): Promise<Base.Response>
      connect(params: Rtm.Connect.Params, callback: (params: Base.Response) => void): void
      start(params: Rtm.Start.Params): Promise<Base.Response>
      start(params: Rtm.Start.Params, callback: (params: Base.Response) => void): void
    };
    static search = {
      all(params: Search.All.Params): Promise<Base.Response>
      all(params: Search.All.Params, callback: (params: Base.Response) => void): void
      files(params: Search.Files.Params): Promise<Base.Response>
      files(params: Search.Files.Params, callback: (params: Base.Response) => void): void
      messages(params: Search.Messages.Params): Promise<Base.Response>
      messages(params: Search.Messages.Params, callback: (params: Base.Response) => void): void
    };
    search = {
      all(params: Search.All.Params): Promise<Base.Response>
      all(params: Search.All.Params, callback: (params: Base.Response) => void): void
      files(params: Search.Files.Params): Promise<Base.Response>
      files(params: Search.Files.Params, callback: (params: Base.Response) => void): void
      messages(params: Search.Messages.Params): Promise<Base.Response>
      messages(params: Search.Messages.Params, callback: (params: Base.Response) => void): void
    };
    static stars = {
      add(params: Stars.Add.Params): Promise<Base.Response>
      add(params: Stars.Add.Params, callback: (params: Base.Response) => void): void
      list(params: Stars.List.Params): Promise<Base.Response>
      list(params: Stars.List.Params, callback: (params: Base.Response) => void): void
      remove(params: Stars.Remove.Params): Promise<Base.Response>
      remove(params: Stars.Remove.Params, callback: (params: Base.Response) => void): void
    };
    stars = {
      add(params: Stars.Add.Params): Promise<Base.Response>
      add(params: Stars.Add.Params, callback: (params: Base.Response) => void): void
      list(params: Stars.List.Params): Promise<Base.Response>
      list(params: Stars.List.Params, callback: (params: Base.Response) => void): void
      remove(params: Stars.Remove.Params): Promise<Base.Response>
      remove(params: Stars.Remove.Params, callback: (params: Base.Response) => void): void
    };
    static team = {
      accessLogs(params: Team.AccessLogs.Params): Promise<Base.Response>
      accessLogs(params: Team.AccessLogs.Params, callback: (params: Base.Response) => void): void
      billableInfo(params: Team.BillableInfo.Params): Promise<Base.Response>
      billableInfo(params: Team.BillableInfo.Params, callback: (params: Base.Response) => void): void
      info(params: Team.Info.Params): Promise<Base.Response>
      info(params: Team.Info.Params, callback: (params: Base.Response) => void): void
      integrationLogs(params: Team.IntegrationLogs.Params): Promise<Base.Response>
      integrationLogs(params: Team.IntegrationLogs.Params, callback: (params: Base.Response) => void): void
      profile: {
        get(params: Team.Profile.Get.Params): Promise<Base.Response>
        get(params: Team.Profile.Get.Params, callback: (params: Base.Response) => void): void
      }
    };
    team = {
      accessLogs(params: Team.AccessLogs.Params): Promise<Base.Response>
      accessLogs(params: Team.AccessLogs.Params, callback: (params: Base.Response) => void): void
      billableInfo(params: Team.BillableInfo.Params): Promise<Base.Response>
      billableInfo(params: Team.BillableInfo.Params, callback: (params: Base.Response) => void): void
      info(params: Team.Info.Params): Promise<Base.Response>
      info(params: Team.Info.Params, callback: (params: Base.Response) => void): void
      integrationLogs(params: Team.IntegrationLogs.Params): Promise<Base.Response>
      integrationLogs(params: Team.IntegrationLogs.Params, callback: (params: Base.Response) => void): void
      profile: {
        get(params: Team.Profile.Get.Params): Promise<Base.Response>
        get(params: Team.Profile.Get.Params, callback: (params: Base.Response) => void): void
      }
    };
    static usergroups = {
      create(params: Usergroups.Create.Params): Promise<Base.Response>
      create(params: Usergroups.Create.Params, callback: (params: Base.Response) => void): void
      disable(params: Usergroups.Disable.Params): Promise<Base.Response>
      disable(params: Usergroups.Disable.Params, callback: (params: Base.Response) => void): void
      enable(params: Usergroups.Enable.Params): Promise<Base.Response>
      enable(params: Usergroups.Enable.Params, callback: (params: Base.Response) => void): void
      list(params: Usergroups.List.Params): Promise<Base.Response>
      list(params: Usergroups.List.Params, callback: (params: Base.Response) => void): void
      update(params: Usergroups.Update.Params): Promise<Base.Response>
      update(params: Usergroups.Update.Params, callback: (params: Base.Response) => void): void
      users: {
        list(params: Usergroups.Users.List.Params): Promise<Base.Response>
        list(params: Usergroups.Users.List.Params, callback: (params: Base.Response) => void): void
        update(params: Usergroups.Users.Update.Params): Promise<Base.Response>
        update(params: Usergroups.Users.Update.Params, callback: (params: Base.Response) => void): void
      }
    };
    usergroups = {
      create(params: Usergroups.Create.Params): Promise<Base.Response>
      create(params: Usergroups.Create.Params, callback: (params: Base.Response) => void): void
      disable(params: Usergroups.Disable.Params): Promise<Base.Response>
      disable(params: Usergroups.Disable.Params, callback: (params: Base.Response) => void): void
      enable(params: Usergroups.Enable.Params): Promise<Base.Response>
      enable(params: Usergroups.Enable.Params, callback: (params: Base.Response) => void): void
      list(params: Usergroups.List.Params): Promise<Base.Response>
      list(params: Usergroups.List.Params, callback: (params: Base.Response) => void): void
      update(params: Usergroups.Update.Params): Promise<Base.Response>
      update(params: Usergroups.Update.Params, callback: (params: Base.Response) => void): void
      users: {
        list(params: Usergroups.Users.List.Params): Promise<Base.Response>
        list(params: Usergroups.Users.List.Params, callback: (params: Base.Response) => void): void
        update(params: Usergroups.Users.Update.Params): Promise<Base.Response>
        update(params: Usergroups.Users.Update.Params, callback: (params: Base.Response) => void): void
      }
    };
    static users = {
      deletePhoto(params: Users.DeletePhoto.Params): Promise<Base.Response>
      deletePhoto(params: Users.DeletePhoto.Params, callback: (params: Base.Response) => void): void
      getPresence(params: Users.GetPresence.Params): Promise<Base.Response>
      getPresence(params: Users.GetPresence.Params, callback: (params: Base.Response) => void): void
      identity(params: Users.Identity.Params): Promise<Base.Response>
      identity(params: Users.Identity.Params, callback: (params: Base.Response) => void): void
      info(params: Users.Info.Params): Promise<Base.Response>
      info(params: Users.Info.Params, callback: (params: Base.Response) => void): void
      list(params: Users.List.Params): Promise<Base.Response>
      list(params: Users.List.Params, callback: (params: Base.Response) => void): void
      lookupByEmail(params: Users.LookupByEmail.Params): Promise<Base.Response>
      lookupByEmail(params: Users.LookupByEmail.Params, callback: (params: Base.Response) => void): void
      setActive(params: Users.SetActive.Params): Promise<Base.Response>
      setActive(params: Users.SetActive.Params, callback: (params: Base.Response) => void): void
      setPhoto(params: Users.SetPhoto.Params): Promise<Base.Response>
      setPhoto(params: Users.SetPhoto.Params, callback: (params: Base.Response) => void): void
      setPresence(params: Users.SetPresence.Params): Promise<Base.Response>
      setPresence(params: Users.SetPresence.Params, callback: (params: Base.Response) => void): void
      profile: {
        get(params: Users.Profile.Get.Params): Promise<Base.Response>
        get(params: Users.Profile.Get.Params, callback: (params: Base.Response) => void): void
        set(params: Users.Profile.Set.Params): Promise<Base.Response>
        set(params: Users.Profile.Set.Params, callback: (params: Base.Response) => void): void
      }
    };
    users = {
      deletePhoto(params: Users.DeletePhoto.Params): Promise<Base.Response>
      deletePhoto(params: Users.DeletePhoto.Params, callback: (params: Base.Response) => void): void
      getPresence(params: Users.GetPresence.Params): Promise<Base.Response>
      getPresence(params: Users.GetPresence.Params, callback: (params: Base.Response) => void): void
      identity(params: Users.Identity.Params): Promise<Base.Response>
      identity(params: Users.Identity.Params, callback: (params: Base.Response) => void): void
      info(params: Users.Info.Params): Promise<Base.Response>
      info(params: Users.Info.Params, callback: (params: Base.Response) => void): void
      list(params: Users.List.Params): Promise<Base.Response>
      list(params: Users.List.Params, callback: (params: Base.Response) => void): void
      lookupByEmail(params: Users.LookupByEmail.Params): Promise<Base.Response>
      lookupByEmail(params: Users.LookupByEmail.Params, callback: (params: Base.Response) => void): void
      setActive(params: Users.SetActive.Params): Promise<Base.Response>
      setActive(params: Users.SetActive.Params, callback: (params: Base.Response) => void): void
      setPhoto(params: Users.SetPhoto.Params): Promise<Base.Response>
      setPhoto(params: Users.SetPhoto.Params, callback: (params: Base.Response) => void): void
      setPresence(params: Users.SetPresence.Params): Promise<Base.Response>
      setPresence(params: Users.SetPresence.Params, callback: (params: Base.Response) => void): void
      profile: {
        get(params: Users.Profile.Get.Params): Promise<Base.Response>
        get(params: Users.Profile.Get.Params, callback: (params: Base.Response) => void): void
        set(params: Users.Profile.Set.Params): Promise<Base.Response>
        set(params: Users.Profile.Set.Params, callback: (params: Base.Response) => void): void
      }
    }
  }
}