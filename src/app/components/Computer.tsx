import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
const Computer=(props:any)=> {
    const [seen, setSeen] = useState(true)
    const group = useRef();
    useGSAP(()=> {
        gsap.to(group.current?.rotation ,
            {
           y:group.current?.rotation.y +Math.PI/2,
           duration:1,
           repeat:1,          
   
        }
    )
    }
)
   
  const { nodes, materials, animations } = useGLTF('/my-models/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, 0.033]}>
          <group
            name="4cef7c9d510940d8bf5a9a57aa408b42fbx"
            rotation={[-Math.PI, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Monitor-A-"
                  position={[5.993, -1.311, 0.887]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.922, 1, 0.858]}>
                  <mesh
                    name="Monitor-A-_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Monitor-A-_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Monitor-B-"
                  position={[5.993, -0.946, 0.887]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.94, 1.019, 1.019]}>
                  <mesh
                    name="Monitor-B-_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Monitor-B-_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group name="screen_glass" position={[5.923, 0.01, 0.887]} scale={[0.922, 1, 1]}>
                  <mesh
                    name="screen_glass_screen_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.screen_glass_screen_0.geometry}
                    material={materials.screen}
                  />
                </group>
                <group
                  name="Box002"
                  position={[7.197, -10.437, -20.778]}
                  rotation={[0.092, 0, 0]}
                  scale={[1.199, 1, 1]}>
                  <mesh
                    name="Box002_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Box002_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Tower"
                  position={[5.991, 15.639, -21.506]}
                  scale={[1.264, 3.46, 3.388]}>
                  <mesh
                    name="Tower_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Tower_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="tower-case"
                  position={[5.991, 15.06, -22.123]}
                  scale={[0.229, 4.055, 4.842]}>
                  <mesh
                    name="tower-case_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['tower-case_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Tower-Front"
                  position={[4.05, 14.894, -21.506]}
                  scale={[1.003, 3.604, 3.746]}>
                  <mesh
                    name="Tower-Front_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Tower-Front_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group name="base" position={[8.444, 11.264, -21.436]} scale={[1, 1.108, 1]}>
                  <mesh
                    name="base__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.base__0.geometry}
                    material={materials.base__0}
                  />
                </group>
                <group
                  name="key"
                  position={[-4.63, -8.141, -18.599]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key-alt"
                  position={[11.736, -14.913, -19.82]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key-alt_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['key-alt_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Key-space"
                  position={[2.518, -14.913, -19.82]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="Key-space_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Key-space_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group name="Box050" position={[-8.831, -1.124, -16.062]} scale={[0.752, 1, 1]}>
                  <mesh
                    name="Box050_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Box050_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group name="Line001" position={[23.122, 18.732, -21.944]}>
                  <mesh
                    name="Line001_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Line001_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Line002"
                  position={[9.388, 38.916, -12.427]}
                  rotation={[-Math.PI / 2, 1.307, -Math.PI]}>
                  <mesh
                    name="Line002_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Line002_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder001"
                  position={[26.975, 27.836, -21.195]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1.406, 1.406, 2.681]}>
                  <mesh
                    name="Cylinder001_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder002"
                  position={[20.395, -4.647, -19.52]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1.406, 1.406, 0.667]}>
                  <mesh
                    name="Cylinder002_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder003"
                  position={[11.998, 34.628, -17.568]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1.406, 1.406, 0.667]}>
                  <mesh
                    name="Cylinder003_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder005"
                  position={[26.419, -5.489, -20.985]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[1.406, 1.406, 0.667]}>
                  <group name="Object_39" position={[-0.004, 0, -1.261]}>
                    <mesh
                      name="Cylinder005_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder005_computer_0.geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder006"
                  position={[-7.387, -5.489, -20.985]}
                  rotation={[-Math.PI, 0, 0]}
                  scale={[1.406, 1.406, 0.667]}>
                  <group name="Object_42" position={[-0.004, 0, -1.261]}>
                    <mesh
                      name="Cylinder006_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder006_computer_0.geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="Monitor-C-"
                  position={[5.682, 25.906, 8.752]}
                  rotation={[-0.331, 0, 0]}
                  scale={[0.936, 1, 1]}>
                  <mesh
                    name="Monitor-C-_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Monitor-C-_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Tower-drive-"
                  position={[-6.087, -4.529, -17.012]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.769, 1, 1]}>
                  <mesh
                    name="Tower-drive-_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Tower-drive-_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Box056"
                  position={[0.133, 34.921, -17.623]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.667, 1.056]}>
                  <group name="Object_49" position={[0.106, 0, -1.666]}>
                    <mesh
                      name="Box056_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box056_computer_0.geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="Object_51"
                  position={[-3.449, 33.381, -17.623]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[0.701, 0.468, 0.701]}>
                  <group name="Object_52" position={[-0.121, 0, -1.666]}>
                    <mesh
                      name="_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes._computer_0.geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder007"
                  position={[-1.033, 35.15, -17.63]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}>
                  <mesh
                    name="Cylinder007_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder007_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder008"
                  position={[1.365, 35.15, -17.63]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}>
                  <mesh
                    name="Cylinder008_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder008_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Monitor-D-"
                  position={[12.455, 28.836, -4.974]}
                  rotation={[-1.571, 0, 0]}
                  scale={[0.329, 0.801, 1]}>
                  <mesh
                    name="Monitor-D-_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Monitor-D-_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Tower-side"
                  position={[-12.579, 18.098, -16.626]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 1, 0.133]}>
                  <mesh
                    name="Tower-side_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Tower-side_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Tower-nub-"
                  position={[17.033, -2.476, -14.488]}
                  rotation={[Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Tower-nub-_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Tower-nub-_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Tower-light-1"
                  position={[17.022, -2.664, -14.495]}
                  rotation={[Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Tower-light-1_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Tower-light-1_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Tower-nub-2"
                  position={[16.091, -2.476, -14.488]}
                  rotation={[Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Tower-nub-2_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Tower-nub-2_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Tower-nub-3"
                  position={[15.148, -2.476, -14.488]}
                  rotation={[Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Tower-nub-3_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Tower-nub-3_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Tower-drive-light"
                  position={[-3.612, -3.255, -16.225]}
                  rotation={[Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Tower-drive-light_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Tower-drive-light_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Tower-drive-stub"
                  position={[-3.601, -3.067, -16.218]}
                  rotation={[Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Tower-drive-stub_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Tower-drive-stub_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Plane003"
                  position={[-6.087, -8.698, -17.012]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.769, 1, 1]}
                />
                <group
                  name="Tower-drive-button"
                  position={[-8.371, -3.65, -17.641]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1.462, 1.856, 1]}>
                  <mesh
                    name="Tower-drive-button_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Tower-drive-button_computer_0'].geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Tower-light-2"
                  position={[16.089, -3.47, -14.495]}
                  rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_78" position={[0, 0, -0.807]}>
                    <mesh
                      name="Tower-light-2_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Tower-light-2_computer_0'].geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="Tower-light-3"
                  position={[15.155, -3.47, -14.495]}
                  rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_81" position={[0, 0, -0.807]}>
                    <mesh
                      name="Tower-light-3_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Tower-light-3_computer_0'].geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="Box060"
                  position={[-8.643, 32.529, -17.609]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[1.062, 1.404, 0.67]}>
                  <mesh
                    name="Box060_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Box060_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Line003"
                  position={[-8.515, 45.894, -24.066]}
                  rotation={[Math.PI / 2, 1.559, 0]}>
                  <mesh
                    name="Line003_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Line003_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder015"
                  position={[21.179, 33.792, -16.37]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[0.793, 0.793, 0.356]}>
                  <mesh
                    name="Cylinder015_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder015_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder016"
                  position={[19.68, 33.792, -16.37]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[0.793, 0.793, 0.356]}>
                  <mesh
                    name="Cylinder016_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder016_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder017"
                  position={[21.179, 33.792, -17.813]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[0.793, 0.793, 0.356]}>
                  <mesh
                    name="Cylinder017_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder017_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder018"
                  position={[19.68, 33.792, -17.813]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[0.793, 0.793, 0.356]}>
                  <mesh
                    name="Cylinder018_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder018_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder019"
                  position={[21.179, 33.792, -19.174]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[0.793, 0.793, 0.356]}>
                  <mesh
                    name="Cylinder019_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder019_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder020"
                  position={[19.68, 33.792, -19.174]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[0.793, 0.793, 0.356]}>
                  <mesh
                    name="Cylinder020_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder020_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="001"
                  position={[-3.449, 33.381, -15.659]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[0.701, 0.468, 0.701]}>
                  <group name="Object_100" position={[-0.121, 0, -1.666]}>
                    <mesh
                      name="001_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['001_computer_0'].geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="tower-On-frame"
                  position={[22.152, 2.177, -12.827]}
                  rotation={[0.807, -0.002, 0.005]}
                  scale={[0.832, 0.845, 0.845]}>
                  <mesh
                    name="tower-On-frame_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['tower-On-frame_computer_0'].geometry}
                    material={materials.computer}
                  />
                  <group name="Tower-on" position={[0, 0, 0.427]} scale={0.74}>
                    <mesh
                      name="Tower-on_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Tower-on_computer_0'].geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="Screen001"
                  position={[5.658, 1.643, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen001_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen001_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen002"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen002_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen002_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen003"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen003_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen003_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen004"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen004_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen004_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen005"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen005_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen005_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen006"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen006_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen006_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen007"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen007_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen007_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen008"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen008_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen008_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen009"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen009_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen009_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen010"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen010_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen010_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen011"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen011_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen011_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen012"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen012_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen012_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen013"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen013_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen013_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen014"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen014_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen014_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen015"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen015_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen015_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen016"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen016_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen016_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen017"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen017_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen017_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen018"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen018_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen018_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen019"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen019_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen019_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen020"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen020_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen020_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="key002"
                  position={[-2.229, -8.141, -18.599]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key002_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key002_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key003"
                  position={[0.143, -8.141, -18.599]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key003_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key003_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key004"
                  position={[2.487, -8.141, -18.599]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key004_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key004_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key005"
                  position={[4.847, -8.141, -18.599]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key005_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key005_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key006"
                  position={[7.141, -8.141, -18.599]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key006_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key006_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key007"
                  position={[9.465, -8.141, -18.599]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key007_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key007_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key008"
                  position={[11.767, -8.141, -18.599]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key008_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key008_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key009"
                  position={[14.077, -8.141, -18.599]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key009_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key009_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key011"
                  position={[-3.106, -10.451, -19.01]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key011_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key011_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key012"
                  position={[-0.734, -10.451, -19.01]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key012_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key012_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key013"
                  position={[1.61, -10.451, -19.01]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key013_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key013_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key014"
                  position={[3.97, -10.451, -19.01]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key014_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key014_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key015"
                  position={[6.265, -10.451, -19.01]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key015_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key015_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key016"
                  position={[8.589, -10.451, -19.01]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key016_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key016_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key017"
                  position={[10.89, -10.451, -19.01]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key017_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key017_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key018"
                  position={[13.2, -10.451, -19.01]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key018_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key018_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key020"
                  position={[-2.155, -12.651, -19.409]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key020_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key020_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key021"
                  position={[0.214, -12.651, -19.409]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key021_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key021_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key022"
                  position={[2.746, -12.651, -19.409]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key022_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key022_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key023"
                  position={[5.039, -12.651, -19.409]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key023_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key023_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key024"
                  position={[7.388, -12.651, -19.409]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key024_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key024_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key025"
                  position={[9.745, -12.651, -19.409]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key025_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key025_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key026"
                  position={[12.227, -12.651, -19.409]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key026_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key026_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key027"
                  position={[-1.919, -14.948, -19.883]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key027_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key027_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key028"
                  position={[9.417, -14.948, -19.883]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key028_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key028_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key029"
                  position={[0.285, -14.948, -19.883]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key029_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key029_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="key030"
                  position={[-7.694, -14.948, -19.883]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key030_Material_#36_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['key030_Material_#36_0'].geometry}
                    material={materials.Material_36}
                  />
                </group>
                <group
                  name="key031"
                  position={[-7.659, -12.651, -19.409]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key031_Material_#36_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['key031_Material_#36_0'].geometry}
                    material={materials.Material_36}
                  />
                </group>
                <group
                  name="key032"
                  position={[-7.708, -10.451, -19.01]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key032_Material_#35_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['key032_Material_#35_0'].geometry}
                    material={materials.Material_35}
                  />
                </group>
                <group
                  name="key033"
                  position={[18.466, -8.141, -18.599]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key033_Material_#34_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['key033_Material_#34_0'].geometry}
                    material={materials.Material_34}
                  />
                </group>
                <group
                  name="key034"
                  position={[18.504, -10.451, -19.01]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key034_keys_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key034_keys_0.geometry}
                    material={materials.keys}
                  />
                </group>
                <group
                  name="key035"
                  position={[18.475, -12.651, -19.409]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key035_keys_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key035_keys_0.geometry}
                    material={materials.keys}
                  />
                </group>
                <group
                  name="key036"
                  position={[18.449, -14.948, -19.883]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key036_keys_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key036_keys_0.geometry}
                    material={materials.keys}
                  />
                </group>
                <group
                  name="key037"
                  position={[20.756, -8.141, -18.599]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key037_keys2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key037_keys2_0.geometry}
                    material={materials.keys2}
                  />
                </group>
                <group
                  name="key038"
                  position={[20.794, -10.451, -19.01]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key038_keys_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key038_keys_0.geometry}
                    material={materials.keys}
                  />
                </group>
                <group
                  name="key039"
                  position={[20.765, -12.651, -19.409]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key039_keys_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key039_keys_0.geometry}
                    material={materials.keys}
                  />
                </group>
                <group
                  name="key040"
                  position={[20.738, -14.948, -19.883]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key040_keys_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key040_keys_0.geometry}
                    material={materials.keys}
                  />
                </group>
                <group
                  name="key041"
                  position={[23.072, -8.141, -18.599]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key041_keys2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key041_keys2_0.geometry}
                    material={materials.keys2}
                  />
                </group>
                <group
                  name="key042"
                  position={[23.11, -10.451, -19.01]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key042_keys2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key042_keys2_0.geometry}
                    material={materials.keys2}
                  />
                </group>
                <group
                  name="key043"
                  position={[23.081, -12.651, -19.409]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key043_keys2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key043_keys2_0.geometry}
                    material={materials.keys2}
                  />
                </group>
                <group
                  name="key044"
                  position={[23.055, -14.948, -19.883]}
                  rotation={[0.179, 0, 0]}
                  scale={1.458}>
                  <mesh
                    name="key044_keys2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.key044_keys2_0.geometry}
                    material={materials.keys2}
                  />
                </group>
                <group
                  name="Box106"
                  position={[11.495, 30.657, -5.482]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.667, 1.056]}>
                  <group name="Object_229" position={[0.106, 0, -1.666]}>
                    <mesh
                      name="Box106_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Box106_computer_0.geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder029"
                  position={[10.329, 30.885, -5.488]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}>
                  <mesh
                    name="Cylinder029_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder029_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder030"
                  position={[12.727, 30.885, -5.488]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}>
                  <mesh
                    name="Cylinder030_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder030_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="004"
                  position={[-3.449, 33.381, -18.903]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[0.701, 0.468, 0.701]}>
                  <group name="Object_236" position={[-0.121, 0, -1.666]}>
                    <mesh
                      name="004_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['004_computer_0'].geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="005"
                  position={[11.538, 28.748, -3.778]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[0.701, 0.468, 0.701]}>
                  <group name="Object_239" position={[-0.121, 0, -1.666]}>
                    <mesh
                      name="005_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['005_computer_0'].geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="Cylinder031"
                  position={[15.226, 28.969, -4.04]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[0.793, 0.793, 0.356]}>
                  <mesh
                    name="Cylinder031_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder031_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Cylinder032"
                  position={[15.226, 28.969, -5.59]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[0.793, 0.793, 0.356]}>
                  <mesh
                    name="Cylinder032_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder032_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Screen021"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen021_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen021_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group name="Box107" position={[-7.462, -1.124, -16.007]} scale={[0.752, 1, 1]}>
                  <mesh
                    name="Box107_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Box107_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group name="Box108" position={[-6.128, -1.124, -16.094]} scale={[0.752, 1, 1]}>
                  <mesh
                    name="Box108_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Box108_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group name="Box109" position={[-4.751, -1.124, -16.062]} scale={[0.752, 1, 1]}>
                  <mesh
                    name="Box109_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Box109_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group name="Box110" position={[-3.374, -1.124, -16.116]} scale={[0.752, 1, 1]}>
                  <mesh
                    name="Box110_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Box110_computer_0.geometry}
                    material={materials.computer}
                  />
                </group>
                <group
                  name="Tower-light-007"
                  position={[16.089, -3.47, -14.495]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.963}>
                  <group name="Object_256" position={[0, 0, -0.807]}>
                    <mesh
                      name="Tower-light-007_Material_#37_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Tower-light-007_Material_#37_0'].geometry}
                      material={materials.Material_37}
                    />
                  </group>
                </group>
                <group
                  name="Tower-light-008"
                  position={[15.155, -3.47, -14.495]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.963}>
                  <group name="Object_259" position={[0, 0, -0.807]}>
                    <mesh
                      name="Tower-light-008_Material_#37_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Tower-light-008_Material_#37_0'].geometry}
                      material={materials.Material_37}
                    />
                  </group>
                </group>
                <group
                  name="Screen022"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen022_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen022_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen023"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen023_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen023_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen024"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen024_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen024_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen025"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen025_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen025_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen026"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen026_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen026_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen027"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen027_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen027_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen028"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen028_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen028_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen029"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen029_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen029_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen030"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen030_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen030_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen031"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen031_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen031_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen032"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen032_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen032_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen033"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen033_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen033_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen034"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen034_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen034_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen035"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen035_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen035_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen036"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen036_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen036_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen037"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen037_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen037_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen038"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen038_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen038_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen039"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen039_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen039_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen040"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen040_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen040_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen041"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen041_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen041_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen042"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen042_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen042_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen043"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen043_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen043_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen044"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen044_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen044_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen045"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen045_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen045_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen046"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen046_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen046_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen047"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen047_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen047_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen048"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen048_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen048_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen049"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen049_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen049_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen050"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen050_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen050_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen051"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen051_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen051_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen052"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen052_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen052_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen053"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen053_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen053_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen054"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen054_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen054_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen055"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen055_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen055_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen056"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen056_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen056_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen057"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen057_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen057_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen058"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen058_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen058_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen059"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen059_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen059_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen060"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen060_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen060_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen061"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen061_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen061_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen062"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen062_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen062_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen063"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen063_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen063_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen064"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen064_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen064_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen065"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen065_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen065_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen066"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen066_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen066_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen067"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen067_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen067_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen068"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen068_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen068_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen069"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen069_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen069_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen070"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen070_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen070_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen071"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen071_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen071_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen072"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen072_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen072_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen073"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen073_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen073_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen074"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen074_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen074_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen075"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen075_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen075_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen076"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen076_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen076_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen077"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen077_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen077_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen078"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen078_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen078_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen079"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen079_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen079_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen080"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen080_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen080_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen081"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen081_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen081_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen082"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen082_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen082_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen083"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen083_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen083_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen084"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen084_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen084_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen085"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen085_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen085_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen086"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen086_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen086_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen087"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen087_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen087_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen088"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen088_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen088_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen089"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen089_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen089_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen090"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen090_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen090_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen091"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen091_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen091_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen092"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen092_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen092_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen093"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen093_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen093_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen094"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen094_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen094_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen095"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen095_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen095_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen096"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen096_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen096_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen097"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen097_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen097_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen098"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen098_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen098_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen099"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen099_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen099_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen100"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen100_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen100_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen101"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen101_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen101_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen102"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen102_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen102_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen103"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen103_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen103_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen104"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen104_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen104_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen105"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen105_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen105_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen106"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen106_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen106_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen107"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen107_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen107_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen108"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen108_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen108_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen109"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen109_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen109_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen110"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen110_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen110_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen111"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen111_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen111_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen112"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen112_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen112_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen113"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen113_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen113_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen114"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen114_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen114_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen115"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen115_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen115_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen116"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen116_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen116_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen117"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen117_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen117_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen118"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen118_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen118_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen119"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen119_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen119_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen120"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen120_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen120_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen121"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen121_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen121_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen122"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen122_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen122_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen123"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen123_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen123_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen124"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen124_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen124_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen125"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen125_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen125_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen126"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen126_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen126_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen127"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen127_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen127_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen128"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen128_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen128_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen129"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen129_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen129_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen130"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen130_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen130_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen131"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen131_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen131_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen132"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen132_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen132_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen133"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen133_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen133_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen134"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen134_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen134_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen135"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen135_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen135_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen136"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen136_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen136_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen137"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen137_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen137_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen138"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen138_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen138_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen139"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen139_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen139_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen140"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen140_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen140_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen141"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen141_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen141_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen142"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen142_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen142_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen143"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen143_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen143_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen144"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen144_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen144_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen145"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen145_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen145_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen146"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen146_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen146_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen147"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen147_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen147_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen148"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen148_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen148_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="Screen149"
                  position={[5.658, 1.644, 0.812]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.923, 0.855, 0.855]}>
                  <mesh
                    name="Screen149_animation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen149_animation_0.geometry}
                    material={materials.animation}
                  />
                </group>
                <group
                  name="006"
                  position={[16.494, 33.381, -17.776]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[0.701, 0.468, 0.701]}>
                  <group name="Object_518" position={[-0.121, 0, -1.666]}>
                    <mesh
                      name="006_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['006_computer_0'].geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="007"
                  position={[16.494, 33.381, -19.056]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[0.701, 0.468, 0.701]}>
                  <group name="Object_521" position={[-0.121, 0, -1.666]}>
                    <mesh
                      name="007_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['007_computer_0'].geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
                <group
                  name="008"
                  position={[16.494, 33.381, -16.592]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[0.701, 0.468, 0.701]}>
                  <group name="Object_524" position={[-0.121, 0, -1.666]}>
                    <mesh
                      name="008_computer_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['008_computer_0'].geometry}
                      material={materials.computer}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/my-models/scene.gltf');

export default Computer
