import * as axios from 'axios';

export class Config {
    private static instance?: Config;

    static readonly getAPIServerURL = async (): Promise<string> =>
     (await axios.default.get<string>('/config.txt')).data;


     static readonly getInstance = () => {
        if (!Config.instance) {
          Config.instance = new Config();
        }
        return Config.instance;
      };

}