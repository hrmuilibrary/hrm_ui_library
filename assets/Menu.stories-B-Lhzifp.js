import{j as e}from"./jsx-runtime-SbcHhCkt.js";import{r as i}from"./iframe-Bgel0fic.js";import{M as C,N as I}from"./NestedMenu-Bmrk1EfX.js";import{B as b}from"./Button-BGu00P_f.js";import{I as y}from"./IconArrowDownloadFilled-B-yZ2LoB.js";import{I as g,a as h,b as x}from"./IconBeach-CSMBinx4.js";import{I as M}from"./IconMore-xN6Xq3Tv.js";import{I as O}from"./IconCheckmark-4ROx5Tzb.js";import{I as n}from"./IconSettings-D3Bwr6_r.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CakgRycE.js";import"./index-CUaafn95.js";import"./Text-q0y3Ugtx.js";import"./helpers-BU9J2je4.js";import"./index-AboGxAif.js";import"./types-DyFBYxib.js";import"./index-D0MkiU4T.js";import"./useOnOutsideClick-C4DFK_Rl.js";import"./CollapseGroup-DQpYwvbH.js";import"./Divider-C6I21I-7.js";import"./AnimatePresenceWrapper-B86oRYgn.js";import"./IconChevronDown-Be_CBxOL.js";import"./IconChevronUp-BZivsslU.js";import"./IconChevronRight-UX1LUfFc.js";import"./AvatarGroup-DnWWAT1O.js";import"./DropzoneFileUpload-MjzVIVVY.js";import"./Label-Dv42gwgl.js";import"./useFormProps-CJCsrNRZ.js";import"./ErrorMessage-GCBX73zC.js";import"./IconDynamicComponent-CfloZ5Ca.js";import"./Snackbar-Ds06ZvPY.js";import"./Alert-CIJ-9NHS.js";import"./IconDismissFilled-D0BF8xvg.js";import"./Progress-CaC0wUB5.js";import"./IconAdd-BnSB7egK.js";import"./Checkbox-ClRQnByI.js";import"./Popover-DD8su1xC.js";import"./IconDismiss-BaS8VnQ4.js";import"./Link-DCKG2QZi.js";import"./IconInfo-BTXcwiel.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ce=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,Ce as __namedExportsOrder,ve as default};
