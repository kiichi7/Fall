#pragma strict

static var controller : CharacterController;
static var cube : Collider;
static var flag : boolean;
static var dir : Vector3;
var count:byte = 0;
var oldpos : Vector3;

function Update () {
        //print(controller.velocity);
        if(flag == true)
        {
                oldpos = controller.transform.position;
                //oldpos += Vector3(0,1,0);
                print(oldpos);
                //print(controller.rigidbody.velocity);
                //print(controller.velocity);
                if(count<5) {
                        cube.transform.position += (dir/5);
                        controller.transform.position = oldpos;
                        count++;
                }
                else
                {
                        count = 0;
                        flag = false;
                }
                //print("\n");
                //print(dir);
        }
        //print(dir);
}