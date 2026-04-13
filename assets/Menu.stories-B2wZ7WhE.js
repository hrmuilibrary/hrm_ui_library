import{j as e}from"./jsx-runtime-DUoqHfTI.js";import{r as i}from"./iframe-lb_dILUR.js";import{M as C,N as I}from"./NestedMenu-DKb5fQ6I.js";import{B as b}from"./Button-DH-fj3wa.js";import{I as y}from"./IconArrowDownloadFilled-GX1Nm2Aq.js";import{I as g,a as h,b as x}from"./IconBeach-DNheYD6l.js";import{I as M}from"./IconMore-QPMu3mWc.js";import{I as O}from"./IconCheckmark-BWFDOFL5.js";import{I as n}from"./IconSettings-BKXQwKk2.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DQWvOstr.js";import"./index-5MvGIPCt.js";import"./Text-CdChZzd0.js";import"./helpers-uo1c56Nd.js";import"./index-AboGxAif.js";import"./types-CvKYa35Y.js";import"./index-CMi4cka0.js";import"./Popover-v383RAF1.js";import"./IconDismiss-Bf6A66rz.js";import"./Link-BFpiW-88.js";import"./CollapseGroup-BOR73AFK.js";import"./Divider-oTtbyP3U.js";import"./AnimatePresenceWrapper-D726DdkB.js";import"./IconChevronDown-CK4H-Bkv.js";import"./IconChevronUp-CG9AvQ4y.js";import"./IconChevronRight-Dye1mir7.js";import"./AvatarGroup-DDHp0_HF.js";import"./DropzoneFileUpload-CQA4funY.js";import"./Label-BJhMevCW.js";import"./useFormProps-DnXWqu9z.js";import"./ErrorMessage-BVYX-oV0.js";import"./IconDynamicComponent-Cg_2CUIx.js";import"./Snackbar-BJelbAuO.js";import"./Alert-DQk1JaFm.js";import"./IconDismissFilled-B10uyt0x.js";import"./Progress-D7gpXzai.js";import"./IconAdd-Ck7L8_2F.js";import"./Checkbox-CBpoQzDa.js";import"./IconInfo-Bi7ojP_l.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
