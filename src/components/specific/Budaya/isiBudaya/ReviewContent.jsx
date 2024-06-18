import {
    Card,
    CardHeader,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
const reviewCard = ( userName, userReview, index ) => {
    let oddStyle = "max-w-[658px] lg:max-w-[558px]"
    let evenStyle = "max-w-[658px] translate-x-32 lg:translate-x-0 lg:max-w-[558px]"
    return(
    <Card color="transparent" shadow={false} className={ index%2 == 0 ? evenStyle : oddStyle}>
      <CardHeader
        color="white"
        floated={false}
        shadow={true}
        className="mx-0 flex items-center gap-4 p-10"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col">
          <div className="container -translate-x-3">
            <Typography variant="h5" color="blue-gray">
              {userName}
            </Typography>
          </div>
          <Typography color="blue-gray">{userReview}</Typography>
        </div>
      </CardHeader>
    </Card>
    )
}
const ReviewContent = () => {
    return(<>
        <div className="flex flex-col justify-start container max-w-full h-auto bg-gradient-to-b from-white to-[#87C0CD]">
            <picture className="flex container items-center pl-80 lg:pl-40">
                <img src="../../public/images/comment-icon.png" className="w-[37.5px] h-[37.5px]"/>
                <h1 className="pb-2 pl-4 w-full font-[400] text-3xl ">Komentar</h1>
            </picture>
            <div className="flex flex-col gap-6 mb-20">
            {reviewCard("Yana_Cooking18", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 1)}
            {reviewCard("Yemima_je", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 2)}
            {reviewCard("Ahsani21_", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 3)}
            </div>
        </div>
    </>)
}

export default ReviewContent;