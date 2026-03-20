import{j as e}from"./jsx-runtime-CvWhM1C9.js";import{r as i}from"./iframe-DZT7gpxO.js";import{M as C,N as I}from"./NestedMenu-BM2ZQs3Z.js";import{B as b}from"./Button-DoiFIr4a.js";import{I as y}from"./IconArrowDownloadFilled-Df_6DlBY.js";import{I as g,a as h,b as x}from"./IconBeach-DTV8HBoK.js";import{I as M}from"./IconMore-Dfs_UlzC.js";import{I as O}from"./IconCheckmark-n5855zcT.js";import{I as n}from"./IconSettings-CCSnWxJ4.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Dn9827Tf.js";import"./index-Bbs0tBh8.js";import"./Text-C-jsFUx0.js";import"./helpers-Cfueoex7.js";import"./index-DYDl_GcV.js";import"./types-BGWVZg8K.js";import"./Popover-CJW9UZJ9.js";import"./IconDismiss-CQnJUtGM.js";import"./Link-DeWOtt-A.js";import"./index-DhSoYT6F.js";import"./CollapseGroup-D0Ixp1ye.js";import"./Divider-BvMcfMes.js";import"./AnimatePresenceWrapper-BoX4Tv9b.js";import"./IconChevronDown-BspoSNX-.js";import"./IconChevronUp-DegtLx_Z.js";import"./IconChevronRight-DCD0reVx.js";import"./AvatarGroup-C9toH664.js";import"./DropzoneFileUpload-DSMqythh.js";import"./Label-JhzPIKFL.js";import"./useFormProps-DRhmaw9E.js";import"./ErrorMessage-3RjkZP3s.js";import"./IconDynamicComponent--rY1R91H.js";import"./Snackbar-DeuuwVB-.js";import"./Alert-C9WYpqdL.js";import"./IconDismissFilled-b-IX0NqM.js";import"./Progress-CY_z_y3l.js";import"./IconAdd-B9JE9ust.js";import"./Checkbox-CaEwBaeV.js";import"./IconInfo-D2KLaeuw.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
