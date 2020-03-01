import { Injectable } from "@nestjs/common";
import HomeModel from "src/models/home.model";

@Injectable()
export default class HomeService {
    getHome(): HomeModel {
        const homeModel = new HomeModel();

        homeModel.message = 'Welcome';

        return homeModel;
    }
}