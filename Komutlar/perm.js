module.exports = ({
          name: "perm",
          code: `
          $hasPerms[$guildID;$authorID;kickmembers]
          $hasPerms[$guildID;$authorID;banmembers]
          $hasPerms[$guildID;$authorID;managechannels]
          $hasPerms[$guildID;$authorID;manageguild]
          $hasPerms[$guildID;$authorID;viewchannel]
          $hasPerms[$guildID;$authorID;sendmessages]
          `
        });