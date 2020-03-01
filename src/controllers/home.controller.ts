import { Controller, Get } from "@nestjs/common";
import { HomeService } from "src/services/base.service";
import HomeModel from "src/models/home.model";


@Controller()
export default class HomeController {
    constructor(private readonly homeService: HomeService) {}

    @Get()
    getHome(): HomeModel {
        return this.homeService.getHome();
    }
}