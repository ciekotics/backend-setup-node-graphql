import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export function getUsers(req: Request, res: Response) {
  res.send([]);
}

export function getUsersId(req: Request, res: Response) {
  req.customField;
  res.send({});
}

export function createUser(
  req: Request<
    {
      id: string;
    }, // route-params
    {}, //
    CreateUserDto, // res-body
    CreateUserQueryParams // req-params
  >,
  res: Response<User>
) {
  req.isAuthenticated
  req.isUnauthenticated
  req.user;
  req.session;
  req.query.loginAfterCreate;
  req.params.id;

  return res.status(201).send({
    email: "",
    id: 0,
    username: "",
  });
}
