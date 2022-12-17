// import {Request, Response} from "express";
// import {Motobike} from "../model/motobike";
//
// class BlogController {
//     findAll = async (req: Request, res: Response) => {
//         let motobike = await Motobike.find().populate('category', 'name')
//         return res.status(200).json(motobike);
//     }
//     addMotobike = async (req: Request, res: Response) => {
//         let motobike = req.body;
//         motobike = await Motobike.create(motobike);
//         return res.status(201).json(motobike);
//     }
//     edit = async (req: Request, res: Response) => {
//         let newMotobike = req.body
//         let id = req.params.id
//         await Motobike.updateOne(
//             {_id: id}, {
//                 $set: newMotobike
//             })
//         return res.status(200).json({
//             message: " edit successfully "
//         })
//     }
//     delete = async (req: Request, res: Response) => {
//         let id = req.params.id;
//         await Motobike.deleteOne({_id: id});
//         return res.status(200).json({
//             massage: "delete successfully"
//         })
//     }
//     findByIdMotobike = async (req: Request, res: Response) => {
//         let id = req.params.id
//         let motobike = await Motobike.findOne({_id: id})
//         return res.status(200).json(motobike)
//     }
//     findAllByCategory = async (req: Request, res: Response) => {
//         let id = req.params.id
//         let motobike = await Motobike.find({category: id}).populate('category')
//         return res.status(200).json(motobike)
//     }
//     findAllByName = async (req: Request, res: Response) => {
//         let motor = req.body.name
//         let arrMotor = await Motobike.find({'name': {'$regex': motor}})
//         return res.status(201).json(arrMotor)
//     }
//     sortQuantity = async (req: Request, res: Response) => {
//         let motobike = await Motobike.find().sort({'quantity': -1}).populate('category')
//         return res.status(200).json(motobike);
//     }
//     sortPrice = async (req: Request, res: Response) => {
//         let motobike = await Motobike.find().sort({'price': 1}).populate('category')
//         return res.status(200).json(motobike);
//     }
//     findAboutPrice = async (req: Request, res: Response) => {
//         let price1 = req.body.price1
//         let price2 = req.body.price2
//         if (price1 > price2) {
//             mess: "So 2 phai lon hon so 1!"
//         } else {
//             let motobike = await Motobike.find({"price": {$gte: price1, $lte: price2}});
//             return res.status(200).json(motobike);
//         }
//     }
//     findAboutQuantity = async (req: Request, res: Response) => {
//         let quantity1 = req.body.quantity1
//         let quantity2 = req.body.quantity2
//         if (quantity1 > quantity2) {
//             mess: "So 2 phai lon hon so 1!"
//         } else {
//             let motobike = await Motobike.find({"price": {$gte: quantity1, $lte: quantity2}});
//             return res.status(200).json(motobike);
//         }
//     }
// }
//
// export default new BlogController();