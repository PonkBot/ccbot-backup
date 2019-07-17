import ReloadCommand from './commands/reload';
import CounterCommand from './commands/counter';
import ThanksCommand from './commands/thanks';
import PingCommand from './commands/ping';
import HelpCommand from './commands/help';
import ArmyCommand from './commands/army';
import CheaterCommand from './commands/cheater';
import {RolesAddCommand, RolesRmCommand} from './commands/roles';
import {SettingsSetCommand, SettingsGetCommand} from './commands/settings';
import {ListEmotesCommand, EmoteCommand, ReactCommand} from './commands/emotes';
import {CCBot} from './ccbot';

/**
 * Registers all the commands. (More or less.)
 */
export default function registerAllCommands(cr: CCBot) {
    cr.registry.registerDefaultTypes();
    cr.registry.registerDefaultGroups();
    cr.registry.registerDefaultCommands({
        help: false, // not compatible with the new dispatcher
        prefix: true,
        eval_: true,
        ping: false,
        commandState: true
    });

    // util
    cr.registry.registerCommand(new ReloadCommand(cr));
    cr.registry.registerCommand(new SettingsSetCommand(cr, 'array-string', {
        key: 'value',
        prompt: 'What value would you like today?',
        type: 'string',
        infinite: true
    }));
    cr.registry.registerCommand(new SettingsSetCommand(cr, 'string', {
        key: 'value',
        prompt: 'What value would you like today?',
        type: 'string'
    }));
    cr.registry.registerCommand(new SettingsGetCommand(cr));
    cr.registry.registerCommand(new CounterCommand(cr));
    
    cr.registry.registerGroup("general");
    cr.registry.registerCommand(new ThanksCommand(cr));
    cr.registry.registerCommand(new PingCommand(cr));
    cr.registry.registerCommand(new ArmyCommand(cr, 'general', 'leacheesearmy', 'leaCheeseAngry'));
    cr.registry.registerCommand(new CheaterCommand(cr));
    cr.registry.registerCommand(new ListEmotesCommand(cr));
    cr.registry.registerCommand(new EmoteCommand(cr));
    cr.registry.registerCommand(new ReactCommand(cr));
    cr.registry.registerGroup("roles");
    cr.registry.registerCommand(new RolesAddCommand(cr));
    cr.registry.registerCommand(new RolesRmCommand(cr));
}
